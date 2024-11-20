import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getStock, updateOrder } from 'services/api.service';
import { Button } from 'components/common/Button';
import { OrderButtonsSection } from 'components/OrderButtonsSection';
import { Item } from 'types/item.type';
import { OrderMenuSection } from 'components/OrderMenuSection';

type OrderPageProps = {
  stock: Item[];
};

export default function OrderPage({ stock }: OrderPageProps): JSX.Element {
  const router = useRouter();

  const [orderId, setOrderId] = useState<number>(0);
  const [showBillButton, setShowBillButton] = useState<boolean>(false);
  const [orderItems, setOrderItems] = useState<Item[]>([]);

  useEffect(() => {
    const { id, hasOrder } = router.query;
    setOrderId(Number(id));
    setShowBillButton(Boolean(hasOrder));
  }, []);

  const onSubmitRound = async () => {
    await updateOrder(orderId, orderItems);

    router.push({
      pathname: '/order/message',
      query: {
        orderId,
      },
    });
  };

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 sm:p-20">
      <h1 className="text-3xl">Menu</h1>
      <OrderMenuSection stock={stock} order={orderItems} onOrderChange={setOrderItems} />
      <OrderButtonsSection
        orderId={orderId}
        showLink={showBillButton}
        disableSubmit={orderItems.length === 0}
        onSubmitClick={onSubmitRound}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const stock = await getStock();

  return {
    props: {
      stock,
    },
  };
};
