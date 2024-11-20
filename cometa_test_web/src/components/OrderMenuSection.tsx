import { Item } from 'types/item.type';
import { Button } from './common/Button';
import { MouseEventHandler } from 'react';

type OrderMenuSectionProps = {
  stock: Item[];
  order: Item[];
  onOrderChange: Function;
};

export const OrderMenuSection = ({
  stock,
  order,
  onOrderChange,
}: OrderMenuSectionProps): JSX.Element => {
  const getQuantity = (id: number) => {
    const item = order.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const onAddClick = (itemId: number) => {
    const prevItem = order.find((prevItem) => prevItem.id === itemId);

    if (prevItem) {
      const updatedOrder = order.map((item) => {
        return item.id === itemId ? { id: itemId, quantity: item.quantity + 1 } : item;
      });

      onOrderChange(updatedOrder);
    } else {
      onOrderChange((prevOrder: any) => [...prevOrder, { id: itemId, quantity: 1 }]);
    }
  };

  const onReduceClick = (itemId: number) => {
    const updatedOrder = order.map((item) => {
      return item.id === itemId ? { id: itemId, quantity: item.quantity - 1 } : item;
    });

    const newOrder = updatedOrder.filter((item) => item.quantity > 0);

    onOrderChange(newOrder);
  };

  return (
    <div className="grid p-2 my-4 border-2 rounded rounded-xl">
      <h2 className="text-xl mb-4">Beers</h2>
      {stock.map((item) => (
        <div key={item.id} className="flex w-full justify-between">
          <div>
            <span>{item.name}</span> (${item.price})
          </div>
          <div className="px-8 ml-8">
            <Button
              shape="round"
              disabled={getQuantity(item.id) === 0}
              onClick={() => {
                onReduceClick(item.id);
              }}
            >
              -
            </Button>
            <span className="mx-4">{getQuantity(item.id)}</span>
            <Button
              shape="round"
              onClick={() => {
                onAddClick(item.id);
              }}
            >
              +
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
