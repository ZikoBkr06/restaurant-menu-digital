from sqlalchemy import Column, Integer, String, Numeric
from database import Base
<<<<<<< HEAD

=======
# from dto.menu_dto import MenuItemCreate, MenuItemOut
>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
class MenuItem(Base):
    __tablename__ = "menu_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(Numeric, nullable=False)
    description = Column(String)
    image_url = Column(String)
