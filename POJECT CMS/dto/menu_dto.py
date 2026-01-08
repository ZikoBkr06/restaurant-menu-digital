from pydantic import BaseModel
# from models.menu_model import MenuItem
class MenuItemBase(BaseModel):
    name: str
    price: float
    description: str | None = None
    image_url: str | None = None

class MenuItemCreate(MenuItemBase):
    pass

class MenuItemOut(MenuItemBase):
    id: int

    class Config:
        orm_mode = True
