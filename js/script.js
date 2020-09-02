document.querySelectorAll(".link-categoria").forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault();
    filtraCategoria(link.innerText.toLowerCase());
  };
});

const filtraCategoria = (categoria) => {
  document.querySelectorAll(".produto").forEach((prod) => {
    if (prod.getAttribute("categoria") !== categoria) {
      prod.classList.remove("d-none");
      prod.classList.add("d-none");
    } else {
      prod.classList.remove("d-none");
    }
  });
};

(function verificaLogin() {
  myStorage = window.sessionStorage;
  let email = myStorage.getItem("email");
  let senha = myStorage.getItem("senha");
  let nome = myStorage.getItem("nome");

  console.log(nome);

  if (email !== undefined && senha !== undefined) {
    document.querySelector("#usuario-logado").innerText = nome;
  }
})();