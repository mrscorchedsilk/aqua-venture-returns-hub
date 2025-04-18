
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label2?: string;  // Added this property to fix the type error
}

const AnimatedStat = ({ label, label2, value, suffix = '', prefix = '', duration = 1500 }: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countingRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (inView) {
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      countingRef.current = setInterval(() => {
        if (current < value) {
          current += increment;
          setCount(Math.min(current, value));
        } else {
          clearInterval(countingRef.current);
        }
      }, duration / steps);
    }
    
    return () => {
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }
    };
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className={`text-3xl font-bold text-aqua-700 mb-2 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
        {prefix}{Math.round(count)}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
      {label2 && <div className="text-gray-500 text-sm">{label2}</div>}
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto my-16">
      <AnimatedStat 
        label="Target Annual Return" 
        value={20} 
        suffix="%" 
      />
      <AnimatedStat 
        label="Minimum Investment" 
        value={32} 
        prefix="₹"
        suffix="L" 
      />
      <AnimatedStat 
        label="Total Land Area" 
        value={1100} 
        suffix="+" 
        label2="acres" 
      />
    </div>
  );
};

export default AnimatedStats;
