"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onStart: () => void;
  fontClassName?: string;
}

export default function LoadingScreen({ onStart, fontClassName }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`fixed inset-0 bg-[#CADC9F] flex flex-col items-center justify-center z-50 ${fontClassName}`}>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-black text-4xl md:text-6xl tracking-widest mb-8 text-center" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.25)' }}>
          PORTFOLIO
        </h1>
        
        {loading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-64 h-8 border-4 border-black p-1">
                <div 
                className="h-full bg-black transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
                />
            </div>
            <p className="text-xs mt-2 text-black">LOADING...</p>
          </div>
        ) : (
          <button
            onClick={onStart}
            className="text-black text-xl md:text-2xl border-4 border-black px-8 py-4 hover:bg-black hover:text-[#CADC9F] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            PRESS START
          </button>
        )}
      </div>
    </div>
  );
}
