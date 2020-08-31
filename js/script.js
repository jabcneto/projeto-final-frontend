document.querySelectorAll("[urlAjax]").forEach((link) => {
  const urlAjax = link.attributes["urlAjax"].value;
  const destino = link.attributes["destino"].value;
  link.onclick = (e) => {
    e.preventDefault();

    navegacao(urlAjax, destino);
  };
});

function navegacao(url, seletor) {
  if (!url || !seletor) return;

  const elemento = document.querySelector(seletor);
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      elemento.innerHTML = html;
    });
}

function login(e) {
	e.preventDefault();
	let nome = "fulano";
	document.getElementById("nomeLogado").innerHTML = `Bem vindo, ` + nome;
}

document.getElementById('form-login').addEventListener("submit", login, true);