myStorage = window.sessionStorage;

const login = () => {
  let email = document.querySelector("#inputEmail").value;
  let senha = document.querySelector("#inputSenha").value;

  if (email === "admin@admin" && senha === "admin") {
    myStorage.setItem("email", email);
    myStorage.setItem("senha", senha);
    myStorage.setItem("nome", "admin");
  }
};
