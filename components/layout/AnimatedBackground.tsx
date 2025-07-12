'use client';

import { useEffect, useRef, useState } from 'react';

export function AnimatedBackground() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const blobSize = 384;

    const handleMouseMove = (e: MouseEvent) => {
      const x = Math.max(
        0,
        Math.min(e.clientX - blobSize / 2, windowSize.width - blobSize)
      );
      const y = Math.max(
        0,
        Math.min(e.clientY - blobSize / 2, windowSize.height - blobSize)
      );
      blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [windowSize]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        ref={blobRef}
        className="absolute w-96 h-96 rounded-full blur-3xl transition-transform duration-300 ease-out mix-blend-lighten"
        style={{
          background:
            'radial-gradient(circle at center, var(--primary) 0%, var(--accent) 30%, transparent 80%)',
          opacity: 0.12,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
}
