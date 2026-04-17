import { useState, useEffect } from 'react';

const SECTIONS = ['inicio', 'nosotros', 'servicios', 'valores', 'contacto'];

export function useActiveSection() {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
