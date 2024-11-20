from typing import List
from fastapi import APIRouter, Depends, Body

from services.OrderService import OrderService
from services.RoundService import RoundService
from models.ItemModel import Item

OrderRouter = APIRouter(
    prefix="/order", tags=["order"]
)

@OrderRouter.get('/{order_id}')
def get(order_id: int, orderService: OrderService = Depends()):
    return orderService.get(order_id)

@OrderRouter.post('/')
def create(orderService: OrderService = Depends()):
    newOrder = orderService.create()
    return newOrder.id

@OrderRouter.patch('/{order_id}/round')
def update(order_id: int, items: List = Body(..., embed=True), roundService: RoundService = Depends()):
    return roundService.create(order_id, items)

@OrderRouter.get('/{order_id}/bill')
def get(order_id: int, orderService: OrderService = Depends()):
    return orderService.getBill(order_id)