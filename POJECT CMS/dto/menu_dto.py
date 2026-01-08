from pydantic import BaseModel
<<<<<<< HEAD

class MenuItemBase(BaseModel):
    name: str
    price: float
    description: str | None = None
=======
from typing import Optional

# from models.menu_model import MenuItem
class MenuItemBase(BaseModel):
    name: str
    price: float
    description: str | None = None  
>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
    image_url: str | None = None

class MenuItemCreate(MenuItemBase):
    pass

class MenuItemOut(MenuItemBase):
    id: int

    class Config:
        orm_mode = True
<<<<<<< HEAD
=======



class MenuUpdateDTO(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
