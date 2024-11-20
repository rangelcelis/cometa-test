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
      <b>Welcome</b>
      <h1 className="text-8xl text-center">Bar Tolo</h1>
      <Button shape="normal" onClick={onButtonClick}>
        Order
      </Button>
    </div>
  );
}
