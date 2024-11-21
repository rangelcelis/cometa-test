import { Button } from 'components/common/Button';
import { useRouter } from 'next/router';

export default function OrderMessagePage() {
  const router = useRouter();

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 sm:p-20">
      <h2 className="text-2xl mb-4" data-testid="text-message">
        Your order was received!
      </h2>

      <Button
        shape="normal"
        testId="button-back"
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
