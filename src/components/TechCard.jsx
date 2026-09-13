import React from 'react';

export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            {tech.badge}
          </span>
        </div>

        <h3 className="font-bold text-slate-800 text-lg mb-1">{tech.name}</h3>
        <p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed">{tech.description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pt-2 border-t border-slate-50">
          <span className="font-medium text-slate-700">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            ⭐ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2 px-4 rounded-lg text-xs font-semibold transition-colors ${
            isAdded
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}