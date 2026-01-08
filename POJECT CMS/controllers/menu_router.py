from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import SessionLocal
from services.menu_service import MenuService
<<<<<<< HEAD
from dto.menu_dto import MenuItemCreate, MenuItemOut

=======
from dto.menu_dto import MenuItemCreate, MenuItemOut, MenuUpdateDTO
# from models.menu_model import MenuItem
>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
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


<<<<<<< HEAD
=======
@menu_router.put("/{item_id}", response_model=MenuItemOut)
def update_item(item_id: int, item: MenuUpdateDTO, db: Session = Depends(get_db)):
    updated = MenuService(db).update_item(item_id, item)
    if not updated:
        raise HTTPException(status_code=404, detail="Item not found")
    return updated


>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
@menu_router.delete("/{item_id}")
def delete_item(item_id: int, db: Session = Depends(get_db)):
    deleted = MenuService(db).delete_item(item_id)
    if deleted:
        return {"message": "Item deleted"}
    raise HTTPException(status_code=404, detail="Item not found")
<<<<<<< HEAD
=======



>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
