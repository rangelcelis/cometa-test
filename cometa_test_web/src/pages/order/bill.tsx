import { GetServerSidePropsContext } from 'next';
import { getBill } from 'services/api.service';

export default function Bill({ bill }: any) {
  const { items, discount, tax, subtotal, total } = bill;

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 sm:p-20">
      <h1 className="text-3xl">Bill</h1>

      <div className="grid px-2 py-4 my-4 border-2 rounded rounded-xl">
        <h2 className="text-xl mb-4">Items</h2>
        {items.map((item: any) => (
          <div key={item.product_id} className="flex w-full justify-between">
            <div>
              <b>{item.name}</b> ({item.quantity})
            </div>
            <span className="ml-12">${item.price * item.quantity}</span>
          </div>
        ))}
        <hr className="my-4" />

        <div className="grid justify-items-end">
          <span>Subtotal: ${subtotal}</span>
          <span>Discount: {discount}%</span>
          <span>Tax: {tax}%</span>
          <hr className="my-2 w-full" />
          <span>
            Total: <b>${total}</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { orderId } = query;
  const bill = await getBill(Number(orderId));

  return {
    props: {
      bill,
    },
  };
};
