from fastapi import Depends
from typing import List

from repositories.RoundRepository import RoundRepository
from models.RoundModel import Round
from models.ItemModel import Item

class RoundService:
    roundRepository: RoundRepository

    def __init__(
        self, roundRepository: RoundRepository = Depends()
    ) -> None:
        self.roundRepository = roundRepository
    
    def create(self, order_id: int, items: List):
        return self.roundRepository.create(Round(order_id=order_id), items)