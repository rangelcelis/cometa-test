from sqlalchemy import (
    Column,
    Integer,
    PrimaryKeyConstraint,
    ForeignKey
)
from sqlalchemy.orm import mapped_column, Mapped

from models.BaseModel import EntityMeta

class Item(EntityMeta):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True)
    product_id: Mapped[Integer] = mapped_column(ForeignKey("products.id"))
    quantity = Column(Integer)

    PrimaryKeyConstraint(id)