from typing import List
from fastapi import APIRouter, Depends

from services.StockService import StockService
from schemas.ItemSchema import ItemSchema

StockRouter = APIRouter(
    prefix="/stock", tags=["stock"]
)

@StockRouter.get('/', response_model=List[ItemSchema])
def get(stockService: StockService = Depends()):
    return stockService.getAll()