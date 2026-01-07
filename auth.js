function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));


    window.location.href = "login.html"; // Rediriger vers la page de connexion après l'inscription réussie
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Aucun compte trouvé");
        return;
    }

    if (email === user.email && password === user.password) {
        
        window.location.href = "index.html"; // Rediriger vers la page principale après la connexion réussie
    } else {
        alert("Email ou mot de passe incorrect");
    }
}
