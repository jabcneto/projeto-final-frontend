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

// LOGIN / AUTENTICACAO / LOGOUT
myStorage = window.sessionStorage;

(function verificaLogin() {
  console.log("Verificando Login");
  let email = myStorage.getItem("email");
  let senha = myStorage.getItem("senha");
  let nome = myStorage.getItem("nome");

  $("#botao-entrar").show();
  $("#usuario-logado").hide();
  $("#botao-sair").hide();

  if (email !== null && senha !== null) {
    $("#botao-entrar").hide();
    $("#usuario-logado").show();
    $("#botao-sair").show();
    console.log(`Usuario Logado: ` + nome);
    document.querySelector("#usuario-logado").innerText = `Bem vindo, ${nome}`;
  }
})();

const login = () => {
  let email = document.querySelector("#inputEmail").value;
  let senha = document.querySelector("#inputSenha").value;

  if (email === "admin@admin" && senha === "admin") {
    myStorage.setItem("email", email);
    myStorage.setItem("senha", senha);
    myStorage.setItem("nome", "admin");
  }
};

const loginSocial = () => {
  myStorage.setItem("email", email);
  myStorage.setItem("senha", senha);
  myStorage.setItem("nome", "admin");
};

const logout = () => {
  myStorage.clear();
  location.reload();
};
