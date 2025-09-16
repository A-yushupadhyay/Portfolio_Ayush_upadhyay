"use client";

import { useState, useRef, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

export const useTestimonials = (items: readonly Testimonial[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const resetAutoPlay = () => {
    setIsAutoPlaying(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => nextTestimonial(), 5000);
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNavigation = (callback: () => void) => {
    callback();
    resetAutoPlay();
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => nextTestimonial(), 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, items.length]);

  return {
    currentIndex,
    direction,
    nextTestimonial,
    prevTestimonial,
    setCurrentIndex,
    handleNavigation,
  };
};
