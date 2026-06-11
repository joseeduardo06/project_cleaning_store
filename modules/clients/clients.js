logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.removeItem("usuarioLogado");

    window.location.replace("/login.html");
});
// Carrega os dados ao abrir a página
window.onload = function () {
  carregarDados();
};

// Adiciona uma nova linha
function adicionarLinha() {
  const tabela = document.getElementById("tabela");

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td><input type="text"></td>
    <td><input type="text"></td>
    <td><input type="text"></td>
    <td><input type="text"></td>
    <td><input type="text"></td>
    <td><input type="text"></td>
    <td><input type="date"></td>
    <td><input type="text"></td>
    <td>
      <button class="btn-editar" onclick="editarLinha(this)" style="display:none;">
        Editar
      </button>

      <button class="btn-salvar" onclick="salvarLinha(this)">
        Salvar
      </button>

      <button class="btn-excluir" onclick="excluirLinha(this)">
        Excluir
      </button>
    </td>
  `;

  tabela.appendChild(tr);
}

// Editar linha
function editarLinha(btn) {
  const tr = btn.parentElement.parentElement;
  const inputs = tr.querySelectorAll("input");

  inputs.forEach(input => {
    input.removeAttribute("readonly");
  });

  // Esconde Editar
  btn.style.display = "none";

  // Mostra Salvar
  const btnSalvar = tr.querySelector(".btn-salvar");
  btnSalvar.style.display = "inline-block";
}

// Salvar linha
function salvarLinha(btn) {
  const tr = btn.parentElement.parentElement;
  const inputs = tr.querySelectorAll("input");

  let possuiCampoVazio = false;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      possuiCampoVazio = true;
      input.style.border = "2px solid red";
    } else {
      input.style.border = "";
    }
  });

  if (possuiCampoVazio) {
    alert("Preencha todos os campos antes de salvar.");
    return;
  }

  inputs.forEach(input => {
    input.setAttribute("readonly", true);
  });

  // Mostra Editar
  const btnEditar = tr.querySelector(".btn-editar");
  btnEditar.style.display = "inline-block";

  // Esconde Salvar
  btn.style.display = "none";

  salvarDados();

  alert("Dados salvos com sucesso!");
}

// Excluir linha
function excluirLinha(btn) {
  const confirmar = confirm(
    "Tem certeza que deseja excluir este registro?"
  );

  if (confirmar) {
    const tr = btn.parentElement.parentElement;
    tr.remove();

    salvarDados();

    alert("Registro excluído!");
  }
}

// Salva todos os dados da tabela
function salvarDados() {
  const tabela = document.getElementById("tabela");
  const linhas = tabela.querySelectorAll("tr");

  const dados = [];

  linhas.forEach(tr => {
    const inputs = tr.querySelectorAll("input");

    if (inputs.length > 0) {
      dados.push(
        Array.from(inputs).map(input => input.value)
      );
    }
  });

  localStorage.setItem(
    "clientes",
    JSON.stringify(dados)
  );
}

// Carrega os dados do localStorage
function carregarDados() {
  const dados =
    JSON.parse(localStorage.getItem("clientes")) || [];

  const tabela = document.getElementById("tabela");

  dados.forEach(cliente => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><input type="text" value="${cliente[0]}" readonly></td>
      <td><input type="text" value="${cliente[1]}" readonly></td>
      <td><input type="text" value="${cliente[2]}" readonly></td>
      <td><input type="text" value="${cliente[3]}" readonly></td>
      <td><input type="text" value="${cliente[4]}" readonly></td>
      <td><input type="text" value="${cliente[5]}" readonly></td>
      <td><input type="date" value="${cliente[6]}" readonly></td>
      <td><input type="text" value="${cliente[7]}" readonly></td>
      <td>
        <button class="btn-editar" onclick="editarLinha(this)">
          Editar
        </button>

        <button class="btn-salvar" onclick="salvarLinha(this)" style="display:none;">
          Salvar
        </button>

        <button class="btn-excluir" onclick="excluirLinha(this)">
          Excluir
        </button>
      </td>
    `;

    tabela.appendChild(tr);
  });
}