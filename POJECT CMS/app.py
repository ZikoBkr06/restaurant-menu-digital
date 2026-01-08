from fastapi import FastAPI
from database import Base, engine
from controllers.menu_router import menu_router
from controllers.employee_router import employee_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(menu_router)
app.include_router(employee_router)

@app.get("/")
def home():
    return {"message": "Backend restaurant opérationnel"}





