from fastapi import Depends
from sqlalchemy.orm import Session, joinedload

from config import (
    get_db_connection,
)
from models.OrderModel import Order

class OrderRepository:
    db: Session

    def __init__(
        self, db: Session = Depends(get_db_connection)
    ) -> None:
        self.db = db

    def get(self, order: Order) -> Order:
        return self.db.get(Order, order.id)
    
    def create(self, order: Order):
        self.db.add(order)
        self.db.commit()
        self.db.refresh(order)
        return order