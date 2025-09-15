import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
interface StatsCardProps {
  label: string;
  value: string;
  scrolled?: boolean; // 👈 new prop
}
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
export function StatsCard({
  label,
  value,
  scrolled = false
}: StatsCardProps) {
  const {
    ref,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [displayValue, setDisplayValue] = useState("");
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const animationDuration = 2000;
  const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];
  const shouldScramble = (char: string) => /[0-9]/.test(char);
  useEffect(() => {
    if (!inView) {
      setDisplayValue("");
      return;
    }
    if (!displayValue) {
      setDisplayValue(value.replace(/[0-9]/g, " "));
    }
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);
      let result = "";
      for (let i = 0; i < value.length; i++) {
        const char = value[i];
        if (!shouldScramble(char)) {
          result += char;
        } else {
          const charRevealPoint = i / value.length;
          if (progress < charRevealPoint) {
            result += getRandomChar();
          } else if (progress < charRevealPoint + 0.2) {
            result += Math.random() > (progress - charRevealPoint) * 5 ? getRandomChar() : char;
          } else {
            result += char;
          }
        }
      }
      setDisplayValue(result);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [inView, value, displayValue]);

  // colour flips based on the parent’s scrolled state
  const textColor = scrolled ? "text-[#093532]" : "text-[#F5F3EE]";
  return <div ref={ref} className="rounded-lg p-6 transition-colors duration-500">
      <div className={`text-sm font-medium mb-1 ${textColor}`}>{label}</div>
      <div className={`text-3xl font-bold font-mono ${textColor}`}>
        {inView ? displayValue : value}
      </div>
    </div>;
}