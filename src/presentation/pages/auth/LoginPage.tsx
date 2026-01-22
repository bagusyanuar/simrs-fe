import { Button } from '@/presentation/components/ui/button';
import { Card } from '@/presentation/components/ui/card';

export default function LoginPage() {
  return (
    <section>
      <Card className="w-72">
        <Button
          text="Login"
          variant="primary"
          size="small"
          className="w-full"
        />
      </Card>
    </section>
  );
}
