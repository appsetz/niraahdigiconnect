'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Trail {
  x: number;
  y: number;
  id: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  id: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const frameRef = useRef<number | undefined>(undefined);

  // Particle animation loop
  useEffect(() => {
    const animate = () => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1, // Gravity
            life: p.life - 1,
          }))
          .filter(p => p.life > 0)
      );
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    let trailInterval: NodeJS.Timeout;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Create particle explosion on click
      const newParticles: Particle[] = [];
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        newParticles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * (2 + Math.random() * 2),
          vy: Math.sin(angle) * (2 + Math.random() * 2),
          life: 30 + Math.random() * 20,
          id: Date.now() + i,
        });
      }
      setParticles(prev => [...prev, ...newParticles]);
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, textarea, select, [role="button"], [onclick]');
      setIsPointer(!!isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Create trail continuously
    trailInterval = setInterval(() => {
      setTrails(prev => {
        const newTrail = { x: position.x, y: position.y, id: Date.now() };
        return [...prev, newTrail].slice(-12);
      });
    }, 30);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(trailInterval);
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position]);

  // Don't render on mobile/touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      const style = document.createElement('style');
      style.innerHTML = `
        .custom-cursor, .cursor-trail, .cursor-particle, .custom-cursor-ring { 
          display: none !important; 
        }
        * { cursor: auto !important; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail effect */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (index + 1) / trails.length * 0.4,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trails.length * 0.8})`,
          }}
        />
      ))}

      {/* Click particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.life / 50,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className={`custom-cursor ${isPointer ? 'cursor-pointer' : ''} ${isClicking ? 'cursor-clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="cursor-inner">
          <div className="cursor-glow" />
        </div>
      </div>

      {/* Outer ring */}
      <div
        className={`custom-cursor-ring ${isPointer ? 'cursor-pointer' : ''} ${isClicking ? 'cursor-clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="cursor-ring-inner" />
      </div>
    </>
  );
};

export default CustomCursor;

