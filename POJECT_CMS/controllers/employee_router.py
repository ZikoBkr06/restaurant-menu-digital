from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models.employee import Employee
from schemas import EmployeeCreate, EmployeeRead, EmployeeUpdate

employee_router = APIRouter(prefix="/employees")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

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


@employee_router.put("/{employee_id}", response_model=EmployeeRead)
def update_employee(employee_id: int, emp_data: EmployeeUpdate, db: Session = Depends(get_db)):
    emp = db.query(Employee).filter(Employee.id == employee_id).first()
    if not emp:
        raise HTTPException(status_code=404, detail="Employee not found")
    update_data = emp_data.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(emp, key, value)
    db.commit()
    db.refresh(emp)
    return emp

@employee_router.delete("/{employee_id}")
def delete_employee(employee_id: int, db: Session = Depends(get_db)):
    emp = db.query(Employee).get(employee_id)
    if emp:
        db.delete(emp)
        db.commit()
        return {"message": "Deleted"}
    return {"error": "Not found"}
