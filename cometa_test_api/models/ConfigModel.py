from sqlalchemy import (
    Column,
    Integer,
    Float,
    String,
    Boolean,
    PrimaryKeyConstraint
)

from models.BaseModel import EntityMeta

class Config(EntityMeta):
    __tablename__ = "configs"

    id = Column(Integer, primary_key=True)
    name = Column(String(20))
    value = Column(Float)
    is_active = Column(Boolean)

    PrimaryKeyConstraint(id)