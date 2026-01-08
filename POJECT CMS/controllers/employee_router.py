from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import SessionLocal
from services.employee_service import EmployeeService
from dto.employee_dto import EmployeeIn, EmployeeOut

employee_router = APIRouter(prefix="/employee", tags=["Employee"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@employee_router.get("/", response_model=list[EmployeeOut])
def get_employees(db: Session = Depends(get_db)):
    return EmployeeService(db).get_employees()

@employee_router.post("/", response_model=EmployeeOut)
def add_employee(employee: EmployeeIn, db: Session = Depends(get_db)):
    return EmployeeService(db).add_employee(employee)

@employee_router.delete("/{employee_id}")
def delete_employee(employee_id: int, db: Session = Depends(get_db)):
    deleted = EmployeeService(db).delete_employee(employee_id)
    if deleted:
        return {"message": "Employee deleted"}
    raise HTTPException(status_code=404, detail="Employee not found")