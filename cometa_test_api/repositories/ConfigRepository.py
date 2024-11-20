from typing import List
from fastapi import Depends
from sqlalchemy.orm import Session

from config import (
    get_db_connection,
)
from models.ConfigModel import Config

class ConfigRepository:
    db: Session

    def __init__(
        self, db: Session = Depends(get_db_connection)
    ) -> None:
        self.db = db

         # TODO: Only to populate initial data (Find a best way :-/) 
        prev = self.db.query(Config).all()

        if not prev:
            configs = [
                Config(
                    name = "tax",
                    value = 15,
                    is_active = True
                ),
                Config(
                    name = "discount",
                    value = 7.5,
                    is_active = True
                ),
            ]
            
            self.db.add_all(configs)
            self.db.commit()
    
    def create(self, config: Config):
        self.db.add(config)
        self.db.commit()

    def getAll(self) -> List[Config]:
        return self.db.query(Config).all()