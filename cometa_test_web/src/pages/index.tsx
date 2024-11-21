import { Button } from 'components/common/Button';
import { useRouter } from 'next/router';
import { createOrder } from 'services/api.service';

export default function Home() {
  const router = useRouter();

  const onButtonClick = async () => {
    const id = await createOrder();
    router.push(`/order/${id}`);
  };

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <div className="border rounded rounded-xl p-8">
        <h2 className="text-xl" data-testid="text-welcome">
          Welcome to
        </h2>
        <h1 className="text-8xl text-center" data-testid="text-title">
          Bar Tolo
        </h1>
      </div>
      <Button shape="normal" onClick={onButtonClick} testId="button-next">
        Order
      </Button>
    </div>
  );
}
