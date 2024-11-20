from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.StockRouter import StockRouter
from routers.OrderRouter import OrderRouter
from models.BaseModel import init

app = FastAPI(
    title='Cometa Test API',
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(StockRouter)
app.include_router(OrderRouter)

init()