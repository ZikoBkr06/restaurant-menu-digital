from pydantic import BaseModel

class EmployeeBase(BaseModel):
    full_name: str
    role: str
    phone: str | None = None
    email: str | None = None

class EmployeeIn(EmployeeBase):
    pass

<<<<<<< HEAD
=======
class EmployeeUpdate(BaseModel):
    full_name: str | None = None
    role: str | None = None
    phone: str | None = None
    email: str | None = None

>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
class EmployeeOut(EmployeeBase):
    id: int
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True
