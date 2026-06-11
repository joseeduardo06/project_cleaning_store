document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        if (usuario === "123" && senha === "123") {

            localStorage.setItem("usuarioLogado", "true");

            alert("Login realizado com sucesso!");

            // Redireciona para a página principal do sistema
            window.location.replace("modules/dashboard/dashboard.html");
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
});