import React from 'react';
import RevOpsMeshTile from './components/RevOpsMeshTile';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      {/* 
        The parent container simply centers the component. 
        In a real landing page, this would be one section of many.
      */}
      <div className="relative group">
        {/* Decorative Glow behind the tile */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#5a5cf2] to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        {/* The Isolated Component */}
        <div className="relative">
          <RevOpsMeshTile />
        </div>

        {/* Optional caption for the demo */}
        <div className="absolute -bottom-12 left-0 w-full text-center">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
            Component: RevOpsMeshTile.tsx
          </p>
        </div>
      </div>
    </div>
  );
}