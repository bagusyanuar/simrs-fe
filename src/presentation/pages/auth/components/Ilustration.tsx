import React from 'react';

const Ilustration: React.FC = () => {
  return (
    <section className="relative py-8 px-12 flex flex-col bg-linear-to-br from-primary-500 to-primary-800">
      {/* title */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-8 h-8 rounded-full bg-white/70"></div>
        <span className="text-white text-md font-black tracking-tight">
          MEDIFLOW
        </span>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="mb-1">
          <h1 className="text-xl font-black text-white leading-tight">
            Health Care <br />
            <span className="text-white/70 font-light text-lg">Refined.</span>
          </h1>
          <div className="h-1 w-20 bg-white/30 rounded-full mt-2" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center px-4 overflow-hidden">
            <div className="relative z-10 w-full max-w-sm">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 shadow-lg space-y-3 transform hover:scale-[1.02] transition-transform duration-500">
                {/* head */}
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 border-2 border-white/60 rounded-full border-t-transparent animate-spin" />
                  </div>
                  <div className="flex-1">
                    <div className="h-1.5 w-16 bg-white/40 rounded-full mb-2" />
                    <div className="h-1 w-10 bg-white/20 rounded-full" />
                  </div>
                </div>
                {/* chart */}
                <div className="h-24 flex items-end gap-2 px-2">
                  {[40, 70, 45, 90, 65, 80, 50, 30, 25].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white/30 rounded-t-lg transition-all duration-1000"
                      style={{ height: `${h}%`, opacity: 0.4 + i * 0.1 }}
                    />
                  ))}
                </div>
                {/* footer */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="h-1 w-12 bg-white/30 rounded-full mb-1" />
                    <div className="h-2 w-16 bg-white/60 rounded-full" />
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="h-1 w-12 bg-white/30 rounded-full mb-1" />
                    <div className="h-2 w-16 bg-white/60 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-2.5 shadow-xl animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-[0.5rem] font-bold text-white uppercase tracking-wider">
                    Systems Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white/60 text-xs font-medium mt-auto">
          <p>Trusted by premier medical institutions</p>
          <div className="flex gap-4 mt-1">
            <span className="opacity-50 hover:opacity-100 transition-opacity cursor-default">
              • HIPAA Compliant
            </span>
            <span className="opacity-50 hover:opacity-100 transition-opacity cursor-default">
              • ISO 27001
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-white/5 rounded-full rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] border border-white/10 rounded-full -rotate-12" />
      </div>
    </section>
  );
};

export default Ilustration;
