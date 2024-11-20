import datetime

from sqlalchemy import (
    Column,
    Integer,
    DateTime,
    ForeignKey,
    PrimaryKeyConstraint,
)
from sqlalchemy.orm import relationship, mapped_column, Mapped
from sqlalchemy.sql import func

from models.BaseModel import EntityMeta
from models.ItemRoundAssociation import item_round_association

class Round(EntityMeta):
    __tablename__ = "rounds"

    id = Column(Integer, primary_key=True)
    order_id: Mapped[Integer] = mapped_column(ForeignKey("orders.id"))
    created_at: Mapped[datetime.datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    items = relationship(
        "Item",
        lazy="joined",
        secondary=item_round_association,
    )

    PrimaryKeyConstraint(id)