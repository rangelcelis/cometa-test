import { Item } from 'types/item.type';

const baseUrl = 'http://localhost:8000';

// Stock (Products to show)
export const getStock = async () => {
  return await fetch(`${baseUrl}/stock`)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
};

// Order
export const createOrder = async () => {
  return await fetch(`${baseUrl}/order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
};

export const updateOrder = async (orderId: number, items: Item[]) => {
  return await fetch(`${baseUrl}/order/${orderId}/round`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
};

export const getBill = async (orderId: number) => {
  return await fetch(`${baseUrl}/order/${orderId}/bill`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
};
