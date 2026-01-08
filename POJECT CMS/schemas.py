from pydantic import BaseModel, ConfigDict

# -------- EMPLOYEES --------
# Employee DTOs
class EmployeeCreate(BaseModel):
    full_name: str
    role: str
    phone: str
    email: str


# Employee Read DTO
class EmployeeRead(EmployeeCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)
