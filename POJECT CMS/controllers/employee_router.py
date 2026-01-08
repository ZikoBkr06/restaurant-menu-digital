<<<<<<< HEAD
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models.employee import Employee
from schemas import EmployeeCreate, EmployeeRead

employee_router = APIRouter(prefix="/employees")
=======
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import SessionLocal
from services.employee_service import EmployeeService
from dto.employee_dto import EmployeeIn, EmployeeOut, EmployeeUpdate

employee_router = APIRouter(prefix="/employee", tags=["Employee"])
>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

<<<<<<< HEAD
@employee_router.get("/", response_model=list[EmployeeRead])
def get_employees(db: Session = Depends(get_db)):
    return db.query(Employee).all()

@employee_router.post("/", response_model=EmployeeRead)
def create_employee(emp: EmployeeCreate, db: Session = Depends(get_db)):
    new_emp = Employee(**emp.model_dump())
    db.add(new_emp)
    db.commit()
    db.refresh(new_emp)
    return new_emp

@employee_router.delete("/{employee_id}")
def delete_employee(employee_id: int, db: Session = Depends(get_db)):
    emp = db.query(Employee).get(employee_id)
    if emp:
        db.delete(emp)
        db.commit()
        return {"message": "Deleted"}
    return {"error": "Not found"}
=======
@employee_router.get("/", response_model=list[EmployeeOut])
def get_employees(db: Session = Depends(get_db)):
    return EmployeeService(db).get_employees()

@employee_router.post("/", response_model=EmployeeOut)
def add_employee(employee: EmployeeIn, db: Session = Depends(get_db)):
    return EmployeeService(db).add_employee(employee)

@employee_router.put("/{employee_id}", response_model=EmployeeOut)
def update_employee(employee_id: int, employee: EmployeeUpdate, db: Session = Depends(get_db)):
    updated = EmployeeService(db).update_employee(employee_id, employee)
    if updated:
        return updated
    raise HTTPException(status_code=404, detail="Employee not found")

@employee_router.delete("/{employee_id}")
def delete_employee(employee_id: int, db: Session = Depends(get_db)):
    deleted = EmployeeService(db).delete_employee(employee_id)
    if deleted:
        return {"message": "Employee deleted"}
    raise HTTPException(status_code=404, detail="Employee not found")
>>>>>>> 6af66b20026bb73d327953f16f3dc7505b55a47b
