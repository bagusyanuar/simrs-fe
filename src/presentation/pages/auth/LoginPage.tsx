import Ilustration from './components/Ilustration';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <section className="w-full h-dvh flex items-center justify-center bg-primary-50">
      <div className="w-3xl h-120 bg-white rounded-2xl shadow-2xl grid grid-cols-2 border border-white/50 overflow-hidden">
        <Ilustration />
        <LoginForm />
      </div>
    </section>
  );
}
