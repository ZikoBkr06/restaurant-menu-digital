# Issues du Projet - Kanban GitHub

Issue 1 — Initialiser projet FastAPI
Créer la structure du projet : app.py, controllers, models, services, dto.

Issue 2 — Configurer CORS
Autoriser les requêtes du frontend.

Issue 3 — Créer app.py
Définir l'objet FastAPI et inclure les routers.

Issue 4 — Créer les routers
menu_router
employee_router

Issue 5 — Configuration Base de Données
Créer database.py avec connexion PostgreSQL.
Déplacer les credentials vers variables d'environnement (.env).

Issue 6 — Modèle MenuItem
Créer modèle MenuItem avec id, name, price, description, image_url.

Issue 7 — Modèle Employee
Créer modèle Employee avec id, full_name, role, phone, email.

Issue 8 — Améliorer Modèle MenuItem
Ajouter champ is_available (boolean).
Ajouter champs created_at et updated_at.

Issue 9 — MenuService
Implémenter get_menu(), add_item(), delete_item().

Issue 10 — Améliorer MenuService
Ajouter get_item_by_id(), update_item(), search_items().

Issue 11 — EmployeeService
Implémenter get_employees(), add_employee(), delete_employee().

Issue 12 — Améliorer EmployeeService
Ajouter get_employee_by_id(), update_employee(), get_employees_by_role().

Issue 13 — menu_router
Créer GET /menu, POST /menu, DELETE /menu/{item_id}.

Issue 14 — Améliorer menu_router
Ajouter GET /menu/{item_id}, PUT /menu/{item_id}.

Issue 15 — employee_router
Créer GET /employees, POST /employees, DELETE /employees/{employee_id}.

Issue 16 — Améliorer employee_router
Ajouter GET /employees/{employee_id}, PUT /employees/{employee_id}, GET /employees/role/{role}.

Issue 17 — DTOs Menu
Créer MenuItemCreate, MenuItemOut.

Issue 18 — Améliorer DTOs Menu
Ajouter MenuItemUpdate.
Ajouter validation des prix et des noms.

Issue 19 — DTOs Employee
Créer EmployeeIn, EmployeeOut.

Issue 20 — Améliorer DTOs Employee
Ajouter EmployeeUpdate.
Ajouter validation email et téléphone.

Issue 21 — Gestion d'Erreurs Globale
Créer exception handlers personnalisés.
Gérer les erreurs 404, 400, 500.

Issue 22 — Validation des Données
Valider les emails uniques pour employees.
Valider les prix positifs.

Issue 23 — Menu Digital HTML/CSS
Créer menu.html avec structure complète.
Créer menu.css avec design premium.

Issue 24 — Menu Digital JavaScript
Implémenter logique de filtrage par catégorie.
Créer modal de détails interactif.
Système de panier avec localStorage.

Issue 25 — Intégrer Menu Digital avec Backend
Remplacer données statiques par appels API.
GET /menu pour charger les plats.
Gérer le chargement et les erreurs.

Issue 26 — Système de Panier Complet
Envoyer commande au backend.
Afficher confirmation de commande.
Gérer les erreurs de commande.

Issue 27 — Améliorer UX Menu Digital
Ajouter recherche de plats.
Filtres avancés (prix, disponibilité).
Lazy loading des images.

Issue 28 — Interface Gestion de Stocks
Créer index.html avec formulaires entrées/sorties.
Tableau de stock actuel.
Historique des mouvements.

Issue 29 — Intégrer Stocks avec Backend
Créer API pour gestion de stocks.
Modèle StockItem dans la base de données.
Connecter frontend avec API.

Issue 30 — Variables d'Environnement
Créer fichier .env.
Créer .env.example.
Utiliser python-dotenv.

Issue 31 — Documentation
README.md complet.
Guide d'installation.
Documentation API (Swagger).
