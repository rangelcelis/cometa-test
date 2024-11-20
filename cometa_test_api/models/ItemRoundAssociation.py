from sqlalchemy import Column, ForeignKey, Table

from models.BaseModel import EntityMeta

item_round_association = Table(
    "item_round_association",
    EntityMeta.metadata,
    Column("item_id", ForeignKey("items.id")),
    Column("round_id", ForeignKey("rounds.id")),
)