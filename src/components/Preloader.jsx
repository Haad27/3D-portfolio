import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import StarsCanvas from './canvas/Stars';

const Preloader = ({ onLoadComplete }) => {
  const { active, progress } = useProgress();
  const [shown, setShown] = useState(true);
  const [progressVal, setProgressVal] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  // Enforce a minimum load time of 1.8 seconds to prevent flashing on fast connections
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Smoothly interpolate the progress value to make the loading bar feel alive
  useEffect(() => {
    let animationFrame;
    const updateProgress = () => {
      setProgressVal((prev) => {
        if (prev < progress) {
          const diff = progress - prev;
          // Smoothly increment by a percentage of the remaining difference
          const step = Math.max(0.4, diff * 0.1);
          const next = prev + step;
          return next >= progress ? progress : next;
        }
        return prev;
      });
      animationFrame = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    return () => cancelAnimationFrame(animationFrame);
  }, [progress]);

  // Block scrolling on the body while the loader is active
  useEffect(() => {
    if (shown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [shown]);

  // Trigger the exit transition once all criteria are met
  const isFinished = minTimeElapsed && !active && progress === 100 && progressVal >= 99.9;

  useEffect(() => {
    if (isFinished) {
      const timeout = setTimeout(() => {
        setShown(false);
        if (onLoadComplete) {
          onLoadComplete();
        }
      }, 800); // Match this with the CSS fade transition duration
      return () => clearTimeout(timeout);
    }
  }, [isFinished, onLoadComplete]);

  if (!shown) return null;

  return (
    <div
      style={{
        zIndex: 99999,
        transition: 'opacity 0.8s cubic-bezier(0.85, 0, 0.15, 1), transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)',
        pointerEvents: isFinished ? 'none' : 'all',
      }}
      className={`fixed inset-0 flex flex-col justify-center items-center bg-[#050816] ${
        isFinished ? 'opacity-0 scale-105' : 'opacity-100'
      }`}
    >
      {/* Background moving stars animation inside the preloader */}
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-8 select-none">
        {/* Glow Logo Animation */}
        <div className="relative mb-10 flex justify-center items-center">
          {/* Neon background pulse */}
          <div className="absolute w-24 h-24 rounded-full bg-[#915eff]/10 blur-xl animate-pulse"></div>
          
          {/* Rotating outer border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 rounded-full border-2 border-t-[#915eff] border-r-transparent border-b-[#804dee] border-l-transparent"
          />

          {/* Rotating inner border (reverse) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            className="absolute w-16 h-16 rounded-full border border-t-transparent border-r-[#915eff] border-b-transparent border-l-[#804dee]"
          />

          {/* Center visual symbol */}
          <span className="absolute text-xl font-extrabold text-white tracking-widest font-mono">
            3D
          </span>
        </div>

        {/* Loading Header */}
        <h2 className="text-sm font-semibold text-white tracking-[0.3em] uppercase text-center animate-pulse mb-1">
          Haad's Portfolio
        </h2>
        <p className="text-[10px] text-[#dfd9ff]/70 tracking-[0.15em] uppercase text-center mb-8">
          Initializing 3D Universe...
        </p>

        {/* Thick linear progress bar */}
        <div className="w-full h-[12px] bg-[#10132b] rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] relative border border-[#915eff]/10">
          <div
            className="h-full bg-gradient-to-r from-[#804dee] to-[#915eff] rounded-full shadow-[0_0_10px_rgba(145,94,255,0.8)] transition-all duration-75 ease-out"
            style={{ width: `${progressVal}%` }}
          />
        </div>

        {/* Status / Percentage */}
        <div className="flex justify-between w-full mt-3 text-[10px] font-semibold tracking-widest text-[#dfd9ff]/50">
          <span>LOADING ASSETS</span>
          <span className="text-[#915eff] font-mono">{Math.round(progressVal)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
