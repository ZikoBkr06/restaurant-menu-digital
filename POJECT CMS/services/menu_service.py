from sqlalchemy.orm import Session
from models.menu import MenuItem
from dto.menu_dto import MenuItemCreate, MenuUpdateDTO
# from controllers.menu_router import MenuItemOut
class MenuService:

    def __init__(self, db: Session):
        self.db = db

    def get_menu(self):
        return self.db.query(MenuItem).all()

    def add_item(self, item: MenuItemCreate):
        new_item = MenuItem(**item.dict())
        self.db.add(new_item)
        self.db.commit()
        self.db.refresh(new_item)
        return new_item

    def update_item(self, item_id: int, item_data: MenuUpdateDTO):
        item = self.db.query(MenuItem).filter(MenuItem.id == item_id).first()
        if item:
            update_data = item_data.dict(exclude_unset=True)
            for key, value in update_data.items():
                setattr(item, key, value)
            self.db.commit()
            self.db.refresh(item)
            return item
        return None

    def delete_item(self, item_id: int):
        item = self.db.query(MenuItem).filter(MenuItem.id == item_id).first()
        if item:
            self.db.delete(item)
            self.db.commit()
            return True
        return False
    
    
    
