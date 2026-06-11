  
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.removeItem("usuarioLogado");

    window.location.replace("/login.html");
});