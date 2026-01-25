import React from 'react';
import { LuMail } from 'react-icons/lu';
import { Textfield } from '@/presentation/components/ui/textfield';

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
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <LuMail size={14} />
            <span>Email</span>
          </label>
          <Textfield />
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
