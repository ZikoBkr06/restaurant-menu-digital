from pydantic import BaseModel, ConfigDict
from typing import Optional

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


# Employee Update DTO (champs optionnels pour mises à jour partielles)
class EmployeeUpdate(BaseModel):
    full_name: Optional[str] = None
    role: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
