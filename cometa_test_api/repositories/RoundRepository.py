from typing import List
from fastapi import Depends
from sqlalchemy.orm import Session

from config import (
    get_db_connection,
)
from models.RoundModel import Round
from models.ItemModel import Item

class RoundRepository:
    db: Session

    def __init__(
        self, db: Session = Depends(get_db_connection)
    ) -> None:
        self.db = db
    
    def create(self, round: Round, items: List):
        newItems = []
        
        for item in items:
            newItems.append(Item(product_id=item['id'], quantity=item['quantity']))
        
        round.items = newItems

        self.db.add(round)
        self.db.commit()
        round = self.db.refresh(round)
        return round