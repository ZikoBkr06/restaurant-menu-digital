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

   
    window.location.href = "login.html";
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
        
        window.location.href = "index.html";
    } else {
        alert("Email ou mot de passe incorrect");
    }
}
