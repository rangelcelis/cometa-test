from fastapi import Depends

from repositories.ConfigRepository import ConfigRepository
from models.ConfigModel import Config

class ConfigService:
    configRepository: ConfigRepository

    def __init__(
        self, configRepository: ConfigRepository = Depends()
    ) -> None:
        self.configRepository = configRepository

    def getAll(self):
        return self.configRepository.getAll()