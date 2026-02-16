from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from controllers.menu_router import menu_router
from controllers.employee_router import employee_router

app = FastAPI()

# Allow frontend to call the API (adjust origins for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static frontend files from project root (menu.html, menu.js, css...)
app.mount("/", StaticFiles(directory=".", html=True), name="static")

app.include_router(menu_router)
app.include_router(employee_router)
