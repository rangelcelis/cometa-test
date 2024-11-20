from sqlalchemy import (
    Column,
    Integer,
    Float,
    String,
    PrimaryKeyConstraint,
)
from sqlalchemy.orm import relationship

from models.BaseModel import EntityMeta
from models.ItemRoundAssociation import item_round_association

class Product(EntityMeta):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    name = Column(String(20))
    price = Column(Float)
    quantity = Column(Integer)

    PrimaryKeyConstraint(id)