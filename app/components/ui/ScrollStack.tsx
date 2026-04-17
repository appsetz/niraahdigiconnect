'use client';

import { useLayoutEffect, useRef, useCallback, ReactNode } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef      = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef          = useRef<Lenis | null>(null);
  const cardsRef          = useRef<HTMLElement[]>([]);

  // Cached static (untransformed) offsets — recalculated on mount and resize
  const cardOffsetsRef = useRef<number[]>([]);
  const endOffsetRef   = useRef<number>(0);

  const lastTransformsRef = useRef<Map<number, {
    translateY: number; scale: number; rotation: number; blur: number;
  }>>(new Map());

  // ─── helpers ────────────────────────────────────────────────────────────────

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  // Measure and cache all positions with transforms temporarily cleared
  const cacheOffsets = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    // Temporarily clear transforms so getBoundingClientRect returns true layout position
    cards.forEach(c => { c.style.transform = 'translateZ(0)'; });

    if (useWindowScroll) {
      cardOffsetsRef.current = cards.map(
        c => c.getBoundingClientRect().top + window.scrollY
      );
      const endEl = document.querySelector('.scroll-stack-end') as HTMLElement | null;
      endOffsetRef.current = endEl
        ? endEl.getBoundingClientRect().top + window.scrollY
        : 0;
    } else {
      cardOffsetsRef.current = cards.map(c => c.offsetTop);
      const endEl = scrollerRef.current?.querySelector('.scroll-stack-end') as HTMLElement | null;
      endOffsetRef.current = endEl ? endEl.offsetTop : 0;
    }

    lastTransformsRef.current.clear();
  }, [useWindowScroll]);

  // ─── per-frame transform update ─────────────────────────────────────────────

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length || !cardOffsetsRef.current.length) return;

    const scrollTop       = useWindowScroll ? window.scrollY : scrollerRef.current!.scrollTop;
    const containerHeight = useWindowScroll ? window.innerHeight : scrollerRef.current!.clientHeight;
    const stackPositionPx    = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop      = endOffsetRef.current;

    cards.forEach((card, i) => {
      if (!card) return;

      // Use CACHED static offset — not live getBoundingClientRect
      const cardTop    = cardOffsetsRef.current[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd   = cardTop - scaleEndPositionPx;
      const pinStart     = triggerStart;
      const pinEnd       = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale   = baseScale + i * itemScale;
      const scale         = 1 - scaleProgress * (1 - targetScale);
      const rotation      = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cards.length; j++) {
          const jTriggerStart = cardOffsetsRef.current[j] - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const t = {
        translateY: Math.round(translateY * 100) / 100,
        scale:      Math.round(scale      * 1000) / 1000,
        rotation:   Math.round(rotation   * 100) / 100,
        blur:       Math.round(blur        * 100) / 100,
      };

      const last    = lastTransformsRef.current.get(i);
      const changed = !last
        || Math.abs(last.translateY - t.translateY) > 0.01
        || Math.abs(last.scale      - t.scale)      > 0.0001
        || Math.abs(last.rotation   - t.rotation)   > 0.01
        || Math.abs(last.blur       - t.blur)        > 0.01;

      if (changed) {
        card.style.transform = `translate3d(0, ${t.translateY}px, 0) scale(${t.scale}) rotate(${t.rotation}deg)`;
        card.style.filter    = t.blur > 0 ? `blur(${t.blur}px)` : '';
        lastTransformsRef.current.set(i, t);
      }

      if (i === cards.length - 1) {
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale,
    rotationAmount, blurAmount, useWindowScroll, onStackComplete,
    calculateProgress, parsePercentage,
  ]);

  // ─── lenis setup ────────────────────────────────────────────────────────────

  const setupLenis = useCallback(() => {
    const lenisOpts = {
      duration:      1.2,
      easing:        (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel:   true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp:          0.1,
      syncTouch:     true,
    };

    const lenis = useWindowScroll
      ? new Lenis(lenisOpts)
      : new Lenis({
          ...lenisOpts,
          wrapper: scrollerRef.current!,
          content: scrollerRef.current!.querySelector('.scroll-stack-inner') as HTMLElement,
        });

    const raf = (time: number) => {
      lenis.raf(time);
      updateCardTransforms();
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
  }, [updateCardTransforms, useWindowScroll]);

  // ─── mount / unmount ────────────────────────────────────────────────────────

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange        = 'transform, filter';
      card.style.transformOrigin   = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    // Cache positions AFTER layout settles, before any transforms are applied
    cacheOffsets();

    // Recache on resize so cached offsets stay accurate
    const onResize = () => cacheOffsets();
    window.addEventListener('resize', onResize);

    setupLenis();
    updateCardTransforms();

    return () => {
      window.removeEventListener('resize', onResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition,
    baseScale, rotationAmount, blurAmount, useWindowScroll, onStackComplete,
    cacheOffsets, setupLenis, updateCardTransforms,
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
