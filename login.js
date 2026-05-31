document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        if (usuario === "admin" && senha === "123") {
            alert("Login realizado com sucesso!");

            // Redireciona para a página principal do sistema
            window.location.href = "modules/dashboard/dashboard.html";
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
});