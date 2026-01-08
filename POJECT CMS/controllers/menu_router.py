from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import SessionLocal
from services.menu_service import MenuService
from dto.menu_dto import MenuItemCreate, MenuItemOut
# from models.menu_model import MenuItem
menu_router = APIRouter(prefix="/menu", tags=["Menu"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@menu_router.get("/", response_model=list[MenuItemOut])
def get_menu(db: Session = Depends(get_db)):
    return MenuService(db).get_menu()


@menu_router.post("/", response_model=MenuItemOut)
def add_item(item: MenuItemCreate, db: Session = Depends(get_db)):
    return MenuService(db).add_item(item)


@menu_router.delete("/{item_id}")
def delete_item(item_id: int, db: Session = Depends(get_db)):
    deleted = MenuService(db).delete_item(item_id)
    if deleted:
        return {"message": "Item deleted"}
    raise HTTPException(status_code=404, detail="Item not found")
