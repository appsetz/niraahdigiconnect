'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'motion/react';

const StickyStackLayout = ({ children }: { children: React.ReactNode[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="relative w-full">
      {React.Children.map(children, (child, index) => {
        // We only scale down the sections as they move back into the stack.
        // We calculate how many sections are "above" this one to determine the scale.
        const total = React.Children.count(children);
        const scaleValue = 1 - (total - index - 1) * 0.05;

        return (
          <motion.div
            key={index}
            className="sticky top-0 w-full min-h-screen origin-top shadow-2xl overflow-hidden rounded-t-4xl sm:rounded-t-5xl"
            style={{
              // This provides a subtle scale down effect as sections stack
              scale: scaleValue,
              zIndex: 20 + index, 
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default StickyStackLayout;
