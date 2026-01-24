import React from 'react';

const IllustrationPanel: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Central Illustration: Abstract Medical Data */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl space-y-6 transform hover:scale-[1.02] transition-transform duration-500">
          {/* Header row */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white/60 rounded-full border-t-transparent animate-spin" />
            </div>
            <div className="flex-1">
              <div className="h-3 w-24 bg-white/40 rounded-full mb-2" />
              <div className="h-2 w-16 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Chart area */}
          <div className="h-32 flex items-end gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-white/30 rounded-t-lg transition-all duration-1000"
                style={{ height: `${h}%`, opacity: 0.4 + i * 0.1 }}
              />
            ))}
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="h-2 w-12 bg-white/30 rounded-full mb-2" />
              <div className="h-4 w-16 bg-white/60 rounded-full" />
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="h-2 w-12 bg-white/30 rounded-full mb-2" />
              <div className="h-4 w-16 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-4 shadow-xl animate-bounce">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Systems Online
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Orbits */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 rounded-full -rotate-12" />
      </div>
    </div>
  );
};

export default IllustrationPanel;
