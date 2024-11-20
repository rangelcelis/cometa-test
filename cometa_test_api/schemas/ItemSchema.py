from pydantic import BaseModel

class ItemSchema(BaseModel):
    id: int
    name: str
    price: float
    quantity: int