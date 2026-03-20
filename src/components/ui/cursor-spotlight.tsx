"use client";

import { useRef, useState, useCallback } from "react";

interface CursorSpotlightProps {
  children: React.ReactNode;
  className?: string;
  /** CSS color for the spotlight center, e.g. "rgba(196,138,45,0.45)" */
  color?: string;
  /** Radius of the spotlight in px */
  size?: number;
}

/**
 * Wraps children in a div that renders a warm radial-gradient spotlight
 * following the cursor. Uses mix-blend-mode:screen so it additively
 * brightens dark backgrounds without obscuring content.
 */
export function CursorSpotlight({
  children,
  className = "",
  color = "rgba(196, 138, 45, 0.45)",
  size = 520,
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [active, setActive] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: active ? 1 : 0,
          transition: "opacity 600ms ease",
          mixBlendMode: "screen",
          background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)`,
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
}
