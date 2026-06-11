function pageProtector() {
    const usuario = localStorage.getItem("usuarioLogado");

    if (!usuario) {
        window.location.replace("/login.html");
    }
}

window.addEventListener("DOMContentLoaded", pageProtector);
window.addEventListener("pageshow", pageProtector);