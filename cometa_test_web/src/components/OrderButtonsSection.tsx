import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { Button } from './common/Button';

type OrderButtonsSectionProps = {
  orderId: number;
  onSubmitClick: MouseEventHandler;
  showLink: boolean;
  disableSubmit?: boolean;
};

export const OrderButtonsSection = ({
  orderId,
  showLink,
  disableSubmit,
  onSubmitClick,
}: OrderButtonsSectionProps): JSX.Element => {
  return (
    <div className="grid justify-items-center">
      <Button
        shape="normal"
        testId="button-submit"
        disabled={disableSubmit}
        onClick={onSubmitClick}
      >
        Submit
      </Button>
      {showLink && (
        <Link
          href={{
            pathname: '/order/bill',
            query: { orderId },
          }}
          data-testid="link-view-bill"
        >
          View Bill
        </Link>
      )}
    </div>
  );
};
