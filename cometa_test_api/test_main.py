from fastapi.testclient import TestClient

from main import app

client = TestClient(app)

round = {"items": [{"id": 1, "quantity": 2}, {"id": 2, "quantity": 4}]}

def test_get_stock():
    response = client.get("/stock")
    assert response.status_code == 200
    assert len(response.json()) == 3

def test_crete_order():
    response = client.post("/order")
    assert response.status_code == 201
    assert response.json() != 0

def test_update_order():
    response = client.patch("/order/1/round", json=round)
    assert response.status_code == 200
    
    data = response.json()
    assert data["order_id"] == 1
    assert len(data["items"]) == 2

def test_get_order_bill():
    response = client.get("/order/1/bill")
    assert response.status_code == 200
    
    data = response.json()
    assert len(data["items"]) == 2
    assert data["subtotal"] > 0
    assert data["total"] > 0