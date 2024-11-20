from fastapi import Depends

from repositories.OrderRepository import OrderRepository
from repositories.ProductRepository import ProductRepository
from repositories.ConfigRepository import ConfigRepository
from models.OrderModel import Order
from models.ProductModel import Product

class OrderService:
    orderRepository: OrderRepository
    productRepository: ProductRepository
    configRepository: ConfigRepository

    def __init__(
        self, orderRepository: OrderRepository = Depends(),
        productRepository: ProductRepository = Depends(),
        configRepository: ConfigRepository = Depends()
    ) -> None:
        self.orderRepository = orderRepository
        self.productRepository = productRepository
        self.configRepository = configRepository

    def create(self):
        return self.orderRepository.create(Order())
    
    def get(self, order_id: int):
        return self.orderRepository.get(Order(id=order_id))
    
    def getBill(self, order_id: int):
        order = self.orderRepository.get(Order(id=order_id))
        
        # All Items in every Round
        allItems = []
        for round in order.rounds:
            allItems.extend(round.items)

        # Adding up "quantities" by Item
        items = []
        for item in allItems:
            index = next((i for i, obj in enumerate(items) if obj.product_id == item.product_id), -1)
            
            if index == -1:
                items.append(item)
            else:
                items[index].quantity += item.quantity

        # Description of Item, and adding up "subtotal"
        subtotal = 0
        for i, item in enumerate(items):
            product = self.productRepository.get(Product(id=item.product_id))
            items[i].name = product.name
            items[i].price = product.price
            subtotal += item.quantity * product.price

        # Tax and discount
        tax = 0
        discount = 0
        config = self.configRepository.getAll()

        for c in config:
            if c.is_active:
                if c.name == 'tax':
                    tax = c.value
                elif c.name == 'discount':
                    discount = c.value
        
        total = subtotal - (subtotal * discount / 100) 
        total = total + (total * tax /100)

        return {
            "id": order.id,
            "discount": discount,
            "tax": tax,
            "subtotal": subtotal,
            "total": total,
            "items": items
        }
