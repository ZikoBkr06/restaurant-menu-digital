from pydantic import BaseModel, ConfigDict

# -------- EMPLOYEES --------
<<<<<<< HEAD

=======
# Employee DTOs
>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
class EmployeeCreate(BaseModel):
    full_name: str
    role: str
    phone: str
    email: str

<<<<<<< HEAD
=======

# Employee Read DTO
>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
class EmployeeRead(EmployeeCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)
