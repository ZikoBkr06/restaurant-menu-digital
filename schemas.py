from pydantic import BaseModel, ConfigDict

# -------- EMPLOYEES --------

class EmployeeCreate(BaseModel):
    full_name: str
    role: str
    phone: str
    email: str

class EmployeeRead(EmployeeCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)
