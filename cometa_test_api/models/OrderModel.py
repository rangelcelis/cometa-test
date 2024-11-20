from typing import List
from uuid import uuid4, UUID
from sqlalchemy import (
    Boolean,
    Column,
    Integer,
    Float,
    PrimaryKeyConstraint,
)
from sqlalchemy.orm import Mapped, relationship, mapped_column
from models.BaseModel import EntityMeta
from models.RoundModel import Round

class Order(EntityMeta):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True)
    paid = Column(Boolean, default=False)
    subtotal = Column(Float, default=0)
    tax = Column(Float, default=0)
    discount = Column(Float, default=0)
    rounds: Mapped[List[Round]] = relationship(
        lazy="joined"
    )

    PrimaryKeyConstraint(id)