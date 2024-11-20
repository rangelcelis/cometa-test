from typing import List
from fastapi import Depends
from sqlalchemy.orm import Session

from config import (
    get_db_connection,
)
from models.ItemModel import Item

class ItemRepository:
    db: Session

    def __init__(
        self, db: Session = Depends(get_db_connection)
    ) -> None:
        self.db = db
    
    def create(self, item: Item):
        self.db.add(item)
        self.db.commit()
        self.db.refresh(item)
        return item