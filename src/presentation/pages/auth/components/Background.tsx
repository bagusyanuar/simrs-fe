import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-50 pointer-events-none overflow-hidden">
      {/* Soft color blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[oklch(0.7_0.12_183)] opacity-10 blur-[100px]" />
      <div className="absolute bottom-[0%] right-[5%] w-[35%] h-[35%] rounded-full bg-[oklch(0.7_0.12_183)] opacity-10 blur-[120px]" />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234fb8b0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating UI shadows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[oklch(0.7_0.12_183)]/20 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-[oklch(0.7_0.12_183)]/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
    </div>
  );
};

export default Background;
