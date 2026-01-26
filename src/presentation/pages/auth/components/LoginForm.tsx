import React from 'react';
import { LuMail, LuLock, LuArrowRight } from 'react-icons/lu';
import { Textfield } from '@/presentation/components/ui/textfield';
import { Passwordfield } from '@/presentation/components/ui/passwordfield';
import { Checkbox } from '@/presentation/components/ui/checkbox';

const LoginForm: React.FC = () => {
  return (
    <section className="py-8 px-12 flex flex-col gap-3">
      <div className="w-full mb-3">
        <header>
          <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
            Portal Sign-in
          </h2>
          <p className="text-slate-500 mt-3 text-sm">
            Enter your organizational credentials to continue.
          </p>
        </header>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-3.5 mb-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <LuMail size={14} />
            <span>Email</span>
          </label>
          <Textfield placeholder="Email or Staff ID" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <LuLock size={14} />
              <span>Secure Password</span>
            </label>
            <a
              href="#"
              className="text-xs font-semibold text-primary-500 hover:text-primary-700 transition-colors ease-in-out duration-300"
            >
              Forgot?
            </a>
          </div>
          <Passwordfield placeholder="Password" />
        </div>
        <Checkbox inputSize="small" label="Keep me signed in" />
        <div className="mt-1">
          <button className="w-full flex items-center justify-center gap-2 group rounded-md bg-primary-500 text-white text-xs shadow-lg shadow-primary-500/20 font-semibold py-2.5 cursor-pointer transition-all ease-in-out duration-300">
            <span>Log Into Dashboard</span>
            <LuArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between text-[10px] text-neutral-500">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Network Status: Stable</span>
        </div>
        <div className="flex gap-1.5 uppercase tracking-widest">
          <a href="#" className="hover:text-primary-500 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-primary-500 transition-colors">
            Help Desk
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
