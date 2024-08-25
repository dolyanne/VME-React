import { useEffect, useRef } from 'react';

export default function useScrollAnimation(animationClass) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add(animationClass);
          observer.unobserve(ref.current); // Unobserve after the animation has been triggered
        } else  {
          ref.current.classList.remove(animationClass);
          ref.current.style.opacity = '0'; // Hide element
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationClass]);

  return ref;
}