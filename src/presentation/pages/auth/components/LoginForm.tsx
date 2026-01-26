import React from 'react';
import { LuMail, LuLock } from 'react-icons/lu';
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
      </div>
    </section>
  );
};

export default LoginForm;
