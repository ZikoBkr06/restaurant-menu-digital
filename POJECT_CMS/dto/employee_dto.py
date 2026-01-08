from pydantic import BaseModel

class EmployeeBase(BaseModel):
    full_name: str
    role: str
    phone: str | None = None
    email: str | None = None

class EmployeeIn(EmployeeBase):
    pass

class EmployeeOut(EmployeeBase):
    id: int
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True
