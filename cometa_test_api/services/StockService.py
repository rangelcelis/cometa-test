from fastapi import Depends

from repositories.ProductRepository import ProductRepository

class StockService:
    productRepository: ProductRepository

    def __init__(
        self, productRepository: ProductRepository = Depends()
    ) -> None:
        self.productRepository = productRepository

    def getAll(self):
        return self.productRepository.getAll()