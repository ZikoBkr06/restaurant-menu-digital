from sqlalchemy import Column, Integer, String, Numeric
from database import Base

class MenuItem(Base):
    __tablename__ = "menu_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(Numeric, nullable=False)
    description = Column(String)
    image_url = Column(String)
