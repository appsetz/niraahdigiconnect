'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioShowcase from './components/PortfolioShowcase';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import OurApproach from './components/OurApproach';
import WhyChooseUs from './components/WhyChooseUs';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BrandShowcase from './components/BrandShowcase';
import ParticleShowcase from './components/ParticleShowcase';
import Footer from './components/Footer';

export default function MarketingLandingPage() {
  useEffect(() => {
    /* ── Parallax Engine ── */
    const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');
    const dividerEls = document.querySelectorAll<HTMLElement>('[data-parallax-divider]');
    const progress = document.getElementById('progress-bar');
    let ticking = false;

    const updateParallax = () => {
      const sy = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;

      if (progress) {
        progress.style.width = Math.min((sy / docH) * 100, 100) + '%';
      }

      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0');
        const parent = el.closest('section, .divider-section, .depth-section') as HTMLElement;
        if (!parent) return;
        const sectionTop = parent.getBoundingClientRect().top + sy;
        const offset = (sy - sectionTop + window.innerHeight * 0.5) * speed * 0.35;
        el.style.transform = `translateY(${offset}px)`;
      });

      dividerEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxDivider || '0');
        const parent = el.closest('.divider-section') as HTMLElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const offset = (window.innerHeight / 2 - mid) * speed * 0.5;
        el.style.transform = `translateX(${offset}px)`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    /* ── Scroll-Reveal Observer ── */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-1)' }}
    >
      {/* Scroll Progress Bar */}
      <div
        id="progress-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '4px',
          zIndex: 200,
          background: 'linear-gradient(90deg, #059669, #10B981)',
          width: '0%',
          willChange: 'width',
          borderRadius: '0 2px 2px 0',
        }}
      />

      <Header />
      <Hero />
      <ParticleShowcase />
      <PortfolioShowcase />
      <Services />
      <SelectedWork />
      <OurApproach />
      <WhyChooseUs />

      <Workshops />
      <Testimonials />

      <FAQ />

      <BrandShowcase />

      <Footer />
    </main>
  );
}
