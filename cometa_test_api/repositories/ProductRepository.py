from typing import List
from fastapi import Depends
from sqlalchemy.orm import Session

from config import (
    get_db_connection,
)
from models.ProductModel import Product

class ProductRepository:
    db: Session

    def __init__(
        self, db: Session = Depends(get_db_connection)
    ) -> None:
        self.db = db

         # TODO: Only to populate initial data (Find a best way :-/) 
        prev = self.db.query(Product).all()

        if not prev:
            products = [
                Product(
                    name = "Corona",
                    price = 115,
                    quantity = 12
                ),
                Product(
                    name = "Quilmes",
                    price = 120,
                    quantity = 10
                ),
                Product(
                    name = "Club Colombia",
                    price = 110,
                    quantity = 30
                )
            ]
            
            self.db.add_all(products)
            self.db.commit()

    def get(self, product: Product) -> Product:
        return self.db.get(Product, product.id)
    
    def getAll(self) -> List[Product]:
        return self.db.query(Product).all()
    
    def create(self, product: Product):
        self.db.add(product)
        self.db.commit()
        self.db.refresh(product)
        return product