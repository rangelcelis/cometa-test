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
    <>
      <div>
        <Button disabled={disableSubmit} shape="normal" onClick={onSubmitClick}>
          Submit
        </Button>
      </div>
      {showLink && (
        <div>
          <Link
            href={{
              pathname: '/order/bill',
              query: { orderId },
            }}
          >
            View Bill
          </Link>
        </div>
      )}
    </>
  );
};
