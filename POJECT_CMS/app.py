from fastapi import FastAPI
import uvicorn
import sys

# Imports avec gestion d'erreurs
try:
    from database import Base, engine
    print("✅ Database importée")
except Exception as e:
    print(f"❌ Erreur import database: {e}")
    sys.exit(1)

try:
    from controllers.menu_router import menu_router
    print("✅ Menu router importé")
except Exception as e:
    print(f"❌ Erreur import menu_router: {e}")
    sys.exit(1)

try:
    from controllers.employee_router import employee_router
    print("✅ Employee router importé")
except Exception as e:
    print(f"❌ Erreur import employee_router: {e}")
    sys.exit(1)

# Création des tables
try:
    Base.metadata.create_all(bind=engine)
    print("✅ Tables créées avec succès")
except Exception as e:
    print(f"❌ Erreur création tables: {e}")
    sys.exit(1)

# Création app
app = FastAPI(
    title="Restaurant Backend API",
    version="1.0",
    description="API pour gestion des menus et employés du restaurant"
)

# Inclusion des routers
app.include_router(menu_router)
app.include_router(employee_router)

@app.get("/")
def home():
    return {"message": "Backend restaurant opérationnel"}

@app.get("/health")
def health():
    return {"status": "healthy"}

if __name__ == '__main__':
    print("🚀 Démarrage du serveur...")
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
