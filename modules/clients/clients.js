logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.removeItem("usuarioLogado");

    window.location.replace("/login.html");
});

function adicionarLinha() {
  const tabela = document.getElementById("tabela");

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td><input type="text" value=""></td>
    <td><input type="text" value=""></td>
    <td><input type="text" value=""></td>
    <td><input type="text" value=""></td>
    <td><input type="text" value=""></td>
    <td><input type="text" value=""></td>
    <td><input type="date"></td>
    <td><input type="text" value=""></td>
    <td>
      <button onclick="editarLinha(this)">Editar</button>
      <button onclick="salvarLinha(this)">Salvar</button>
      <button onclick="excluirLinha(this)">Excluir</button>
    </td>
  `;

  tabela.appendChild(tr);
}

function editarLinha(btn) {
  const tr = btn.parentElement.parentElement;
  const inputs = tr.querySelectorAll("input");

  inputs.forEach(input => {
    input.removeAttribute("readonly");
  });
}

function salvarLinha(btn) {
  const tr = btn.parentElement.parentElement;
  const inputs = tr.querySelectorAll("input");

  inputs.forEach(input => {
    input.setAttribute("readonly", true);
  });

  alert("Dados salvos com sucesso!");
}

function excluirLinha(btn) {
  const confirmar = confirm("Tem certeza que deseja excluir este registro?");

  if (confirmar) {
    const tr = btn.parentElement.parentElement;
    tr.remove();
    alert("Registro excluído!");
  } else {
    alert("Exclusão cancelada.");
  }
}