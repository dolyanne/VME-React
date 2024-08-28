import { useEffect, useRef } from 'react';

export default function useScrollAnimation(animationClass) {
  const ref = useRef(null);

  useEffect(() => {
    let observer;

    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting) {
        if (!ref.current.classList.contains(animationClass)) {
          ref.current.classList.add(animationClass);
          ref.current.style.opacity = '1'; // Ensure the element is visible
        }
        observer.unobserve(ref.current); // Unobserve after the animation has been triggered
      } else {
        if (ref.current.classList.contains(animationClass)) {
          ref.current.classList.remove(animationClass);
          ref.current.style.opacity = '0'; // Hide element
        }
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5, // Trigger when 50% of the section is visible
      });
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current && observer) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationClass]);

  return ref;
}
