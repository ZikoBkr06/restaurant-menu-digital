from sqlalchemy.orm import Session
from models.employee import Employee
from dto.employee_dto import EmployeeIn

class EmployeeService:

    def __init__(self, db: Session):
        self.db = db

    def get_employees(self):
        return self.db.query(Employee).all()

    def add_employee(self, emp: EmployeeIn):
        new_emp = Employee(**emp.dict())
        self.db.add(new_emp)
        self.db.commit()
        self.db.refresh(new_emp)
        return new_emp

    def delete_employee(self, emp_id: int):
        emp = self.db.query(Employee).filter(Employee.id == emp_id).first()
        if emp:
            self.db.delete(emp)
            self.db.commit()
            return True
        return False
