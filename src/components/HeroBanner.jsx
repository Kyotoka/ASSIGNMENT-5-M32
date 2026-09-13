import React from 'react';
import bannerStack from '../assets/banner-stack.png';

export default function HeroBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4">
          <button className="text-sm font-medium text-white px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 shadow-md">
            Explore Technologies
          </button>
          <button className="text-sm font-medium text-slate-700 px-5 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-100">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="flex justify-center">
        <img 
          src={bannerStack} 
          alt="Development Stack Illustration" 
          className="w-full max-w-md h-auto drop-shadow-xl"
        />
      </div>
    </section>
  );
}