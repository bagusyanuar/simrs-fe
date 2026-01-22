import { Button } from '@/presentation/components/ui/button';
import { LuSave } from 'react-icons/lu';

export default function LoginPage() {
  return (
    <section>
      <Button
        text="Button"
        variant="primary"
        size="small"
        className="mb-3"
        icon={LuSave}
      />
      <Button text="Button" variant="primary" className="mb-3" />
      <Button
        text="Button"
        variant="primary"
        className="mb-3"
        icon={LuSave}
        loading
        disabled
      />
      <Button
        text="Button"
        variant="accent"
        size="large"
        icon={LuSave}
        loading
        disabled
      />
    </section>
  );
}
