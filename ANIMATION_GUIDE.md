# Animation & Responsiveness Guide

## 🎯 Quick Reference

This guide helps you understand and customize the animations and responsive behavior of the Niraah Digi Connect website.

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Default: 320px - 639px   (Mobile)
sm:     640px - 767px    (Large Mobile)
md:     768px - 1023px   (Tablet)
lg:     1024px - 1279px  (Desktop)
xl:     1280px+          (Large Desktop)
```

---

## ✨ Available Animations

### 1. Entrance Animations

```tsx
// Fade in from bottom
className="animate-fadeInUp"

// Fade in from top
className="animate-fadeInDown"

// Fade in from left
className="animate-fadeInLeft"

// Fade in from right
className="animate-fadeInRight"

// Scale in
className="animate-scaleIn"
```

### 2. Continuous Animations

```tsx
// Floating effect (3s loop)
className="animate-float"

// Gentle pulse (2s loop)
className="animate-pulse-slow"
```

### 3. Stagger Delays

```tsx
// Add sequential delays to list items
className="animate-fadeInUp stagger-1"  // 0.1s delay
className="animate-fadeInUp stagger-2"  // 0.2s delay
className="animate-fadeInUp stagger-3"  // 0.3s delay
className="animate-fadeInUp stagger-4"  // 0.4s delay
className="animate-fadeInUp stagger-5"  // 0.5s delay
className="animate-fadeInUp stagger-6"  // 0.6s delay
```

---

## 🎨 Scroll-Triggered Animations

### Using Intersection Observer

```tsx
import { useEffect, useRef, useState } from 'react';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Content animates when scrolled into view
      </div>
    </section>
  );
};
```

---

## 🎭 Button Styles

### Primary Button

```tsx
<button className="btn-primary">
  Click Me
  <ArrowRight size={18} />
</button>
```

**Features:**
- Ripple effect on hover
- Scale up (1.05x)
- Lift effect (translateY -3px)
- Enhanced shadow

### Secondary Button

```tsx
<button className="btn-secondary">
  Click Me
  <ArrowRight size={18} />
</button>
```

**Features:**
- Slide-in background
- Color inversion
- Scale and lift effect

---

## 🃏 Card Animations

### Service Card

```tsx
<div className="service-card">
  <div className="icon-circle bg-yellow-100">
    <span className="text-3xl">🎯</span>
  </div>
  <h3>Title</h3>
  <p>Description</p>
</div>
```

**Hover Effects:**
- Lift: translateY(-12px)
- Scale: 1.02x
- Enhanced shadow
- Shimmer overlay

---

## 📐 Responsive Patterns

### Grid Layouts

```tsx
// 1 column mobile, 2 tablet, 4 desktop
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Cards */}
</div>

// 2 columns mobile, 4 desktop
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {/* Metrics */}
</div>
```

### Typography Scaling

```tsx
// Responsive heading
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
  Responsive Heading
</h1>

// Responsive body text
<p className="text-base sm:text-lg">
  Responsive paragraph
</p>
```

### Spacing

```tsx
// Responsive padding
<section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
  {/* Content */}
</section>

// Responsive gaps
<div className="space-y-6 sm:space-y-8">
  {/* Stacked items */}
</div>

<div className="flex gap-4 sm:gap-6">
  {/* Horizontal items */}
</div>
```

---

## 🎯 Common Patterns

### Hover Effects

```tsx
// Scale on hover
className="hover:scale-110 transition-transform duration-300"

// Lift on hover
className="hover:-translate-y-2 transition-all duration-300"

// Color change on hover
className="hover:text-yellow-600 transition-colors duration-300"

// Shadow on hover
className="hover:shadow-2xl transition-shadow duration-500"
```

### Transition Timing

```tsx
// Fast (hover effects)
className="transition-all duration-300"

// Medium (card animations)
className="transition-all duration-500"

// Slow (section entrances)
className="transition-all duration-1000"
```

---

## 🔧 Customization Guide

### Adding New Animations

1. **Define keyframe in `globals.css`:**

```css
@keyframes myAnimation {
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(360deg);
  }
}

.animate-myAnimation {
  animation: myAnimation 1s ease-out;
}
```

2. **Use in component:**

```tsx
<div className="animate-myAnimation">
  Animated content
</div>
```

### Changing Animation Speed

```tsx
// Slow down
<div className="animate-fadeInUp" style={{ animationDuration: '2s' }}>

// Speed up
<div className="animate-fadeInUp" style={{ animationDuration: '0.3s' }}>
```

### Custom Delays

```tsx
<div 
  className="animate-fadeInUp" 
  style={{ animationDelay: '0.5s' }}
>
  Delayed animation
</div>
```

---

## 📱 Mobile-Specific Adjustments

### Full-Width Buttons on Mobile

```tsx
<button className="btn-primary w-full sm:w-auto">
  Button Text
</button>
```

### Hide on Mobile

```tsx
<div className="hidden md:block">
  Desktop only content
</div>
```

### Show Only on Mobile

```tsx
<div className="block md:hidden">
  Mobile only content
</div>
```

### Touch-Friendly Sizes

```tsx
// Minimum 44px tap target
<button className="w-12 h-12 sm:w-14 sm:h-14">
  Icon
</button>
```

---

## 🎨 Color Transitions

### Hover Color Changes

```tsx
// Text color
className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"

// Background color
className="bg-white hover:bg-yellow-50 transition-colors duration-300"

// Border color
className="border-gray-300 hover:border-yellow-400 transition-colors duration-300"
```

---

## 🚀 Performance Tips

### Use Transform & Opacity

```tsx
// ✅ Good (GPU accelerated)
className="transition-transform duration-300"
className="transition-opacity duration-300"

// ❌ Avoid (causes reflow)
className="transition-all duration-300" // when animating position/size
```

### Reduce Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📊 Animation Timing Reference

| Duration | Use Case | Example |
|----------|----------|---------|
| 150ms | Micro-interactions | Icon hover |
| 300ms | Quick transitions | Button hover |
| 500ms | Card animations | Service card hover |
| 700ms | Section elements | Staggered list items |
| 1000ms | Major transitions | Section entrance |

---

## 🎯 Best Practices

### DO ✅
- Use animations to guide attention
- Keep animations smooth (60fps)
- Use stagger effects for lists
- Animate on scroll for engagement
- Test on mobile devices
- Use GPU-accelerated properties

### DON'T ❌
- Overuse animations
- Make animations too slow
- Animate during user input
- Use animations on every element
- Forget about reduced motion
- Animate width/height directly

---

## 🔍 Debugging Animations

### Check Animation State

```tsx
// Add temporary border to see element
className="border-2 border-red-500"

// Log visibility state
console.log('Is visible:', isVisible);

// Check animation duration
style={{ animationDuration: '5s' }} // Slow down to debug
```

### Browser DevTools

1. Open DevTools (F12)
2. Go to "Animations" tab
3. Trigger animation
4. Slow down or replay

---

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [React Hooks Reference](https://react.dev/reference/react)

---

## 💡 Quick Fixes

### Animation Not Working?
1. Check if element has the class
2. Verify animation is defined in CSS
3. Check for conflicting styles
4. Ensure element is visible

### Animation Too Fast/Slow?
```tsx
// Adjust duration
className="transition-all duration-[2000ms]"
```

### Animation Not Triggering on Scroll?
1. Check Intersection Observer setup
2. Verify threshold value
3. Check if ref is attached
4. Console.log the isVisible state

---

## 🎉 Examples

### Animated Card Grid

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <div
      key={item.id}
      className={`service-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {item.content}
    </div>
  ))}
</div>
```

### Hover Button with Icon

```tsx
<button className="btn-primary group">
  Get Started
  <ArrowRight 
    size={18} 
    className="group-hover:translate-x-1 transition-transform duration-300" 
  />
</button>
```

### Responsive Section

```tsx
<section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
      Section Title
    </h2>
  </div>
</section>
```

---

**Need help?** Check the component files for more examples or refer to the ENHANCEMENTS.md document for detailed information about all animations and responsive features.

