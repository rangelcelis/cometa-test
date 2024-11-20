import { Button } from 'components/common/Button';
import { useRouter } from 'next/router';

export default function OrderMessagePage() {
  const router = useRouter();

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 sm:p-20">
      <h1 className="text-2xl mb-4">Your order was received!</h1>

      <Button
        shape="normal"
        onClick={() => {
          router.push({
            pathname: '/order/' + router.query.orderId,
            query: {
              hasOrder: true,
            },
          });
        }}
      >
        Back to menu
      </Button>
    </div>
  );
}
