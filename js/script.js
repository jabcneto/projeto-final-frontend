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
