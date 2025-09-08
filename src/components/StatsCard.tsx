import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
interface StatsCardProps {
  label: string;
  value: string;
}
// Characters to use for scrambling effect
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
export function StatsCard({
  label,
  value
}: StatsCardProps) {
  const {
    ref,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [displayValue, setDisplayValue] = useState('');
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const animationDuration = 2000; // Animation duration in ms
  // Function to get a random character from the chars string
  const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];
  // Function to determine if a character should be scrambled
  const shouldScramble = (char: string) => /[0-9]/.test(char);
  useEffect(() => {
    if (!inView) {
      setDisplayValue('');
      return;
    }
    // Initialize with empty string when coming into view
    if (!displayValue) {
      setDisplayValue(value.replace(/[0-9]/g, ' '));
    }
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);
      // Create scrambled text
      let result = '';
      for (let i = 0; i < value.length; i++) {
        const char = value[i];
        if (!shouldScramble(char)) {
          // Keep non-numeric characters as they are
          result += char;
        } else {
          // Determine if this character should be revealed yet
          const charRevealPoint = i / value.length;
          if (progress < charRevealPoint) {
            // Show a random character
            result += getRandomChar();
          } else if (progress < charRevealPoint + 0.2) {
            // In transition - randomly show correct or scrambled
            result += Math.random() > (progress - charRevealPoint) * 5 ? getRandomChar() : char;
          } else {
            // Reveal the actual character
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, value, displayValue]);
  return <div ref={ref} className="bg-[#F5F5F5] rounded-lg p-6 shadow-sm">
      <div className="text-sm font-medium text-[#1A3C40] mb-1">{label}</div>
      <div className="text-3xl font-bold text-[#1A3C40] font-mono">
        {inView ? displayValue : value}
      </div>
    </div>;
}