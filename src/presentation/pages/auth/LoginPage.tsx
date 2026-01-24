import IllustrationPanel from './components/IllustrationPanel';
import Background from './components/Background';

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 selection:bg-[oklch(0.8_0.1_183)]">
      <Background />
      <main className="relative w-full max-w-6xl min-h-[700px] grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden">
        {/* Left Panel: Branding & Illustration */}
        <section className="relative hidden lg:flex flex-col bg-gradient-to-br from-[oklch(0.7_0.12_183)] to-[oklch(0.5_0.1_183)]">
          {/* Logo overlay */}
          <div className="absolute top-10 left-10 z-20">
            {/* <Logo variant="white" /> */}
          </div>

          {/* Content Wrapper */}
          <div className="flex-1 flex flex-col justify-center px-16 pt-20">
            <div className="mb-10 animate-in slide-in-from-left duration-700">
              <h1 className="text-5xl font-black text-white leading-tight">
                Health Care <br />
                <span className="text-white/70 font-light">Refined.</span>
              </h1>
              <div className="h-1.5 w-20 bg-white/30 rounded-full mt-6" />
            </div>

            <div className="flex-1 flex items-center justify-center scale-110">
              <IllustrationPanel />
            </div>

            <div className="pb-10 mt-auto text-white/60 text-sm font-medium">
              <p>Trusted by premier medical institutions across the globe.</p>
              <div className="flex gap-4 mt-2">
                <span className="opacity-50 hover:opacity-100 transition-opacity cursor-default">
                  • HIPAA Compliant
                </span>
                <span className="opacity-50 hover:opacity-100 transition-opacity cursor-default">
                  • ISO 27001
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel: Login Interface */}
        <section className="flex flex-col bg-white p-8 sm:p-12 md:p-16 lg:p-20 overflow-y-auto">
          {/* Mobile Branding */}
          <div className="lg:hidden mb-12 flex justify-between items-center">
            {/* <Logo variant="primary" /> */}
            <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded-md text-slate-500 uppercase tracking-widest">
              Secure Access
            </span>
          </div>

          <div className="max-w-md mx-auto w-full flex-1 flex flex-col justify-center">
            <header className="mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Portal Sign-in
              </h2>
              <p className="text-slate-500 mt-3 text-lg">
                Enter your organizational credentials to continue.
              </p>
            </header>

            {/* Enhanced Role Selector */}
            {/* <nav className="flex bg-slate-50 p-1.5 rounded-2xl mb-10 border border-slate-100 shadow-sm">
              {Object.values(UserRole).map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`flex-1 py-3 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                    selectedRole === role
                      ? 'bg-white text-[oklch(0.6_0.11_183)] shadow-md ring-1 ring-black/[0.02]'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100/50'
                  }`}
                >
                  {role}
                </button>
              ))}
            </nav> */}

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* <LoginForm role={selectedRole} /> */}
            </div>
          </div>

          {/* Footer Info */}
          <footer className="mt-12 pt-10 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-6 text-[12px] font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Network Status: Stable</span>
            </div>
            <div className="flex gap-6 uppercase tracking-widest">
              <a
                href="#"
                className="hover:text-[oklch(0.6_0.11_183)] transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-[oklch(0.6_0.11_183)] transition-colors"
              >
                Help Desk
              </a>
            </div>
          </footer>
        </section>
      </main>
    </section>
  );
}
