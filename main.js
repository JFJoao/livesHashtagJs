import { catalogo } from "./src/utilidades.js";

for (const produtoCatalogo of catalogo) {
  const cartaoProduto = `
    <div class="card-produto">
        <img
          src="./assets/img/${produtoCatalogo.imagem}"
          alt="Produto ${produtoCatalogo.id} do Magazine Hashtag."
          style="height: 300px"
        />
        <p class="marcaProduto">${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>$${produtoCatalogo.preco}</p>
        <button class="botaoAdicionar">Adicionar</button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}

const abrirCarrinhoButton = document.getElementById('abrirCarrinho');
const carrinhoArea = document.querySelector('.carrinhoArea');
const fecharCarrinhoButton = document.getElementById('fecharCarrinho');

abrirCarrinhoButton.addEventListener('click', () => {
  carrinhoArea.classList.toggle('aberto');
});

document.addEventListener('click', (event) => {
  if (!carrinhoArea.contains(event.target) && !abrirCarrinhoButton.contains(event.target)) {
    carrinhoArea.classList.remove('aberto');
  }
}); 

fecharCarrinhoButton.addEventListener('click', () => {
  carrinhoArea.classList.remove('aberto');
});
