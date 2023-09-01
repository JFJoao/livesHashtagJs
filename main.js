import { catalogo } from "./src/utilidades.js";

// Construir catalogo pagina principal
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
        <button class="botaoAdicionar-${produtoCatalogo.id}">Adicionar</button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}

// Abrir e fechar carrinho
const abrirCarrinhoButton = document.getElementById('abrirCarrinho');
const carrinhoArea = document.querySelector('.carrinhoArea');
const fecharCarrinhoButton = document.getElementById('fecharCarrinho');
// abrir carrinho no icone
abrirCarrinhoButton.addEventListener('click', () => {
  carrinhoArea.classList.toggle('aberto');
});
// Fechar carrinho ao clicar fora
// document.addEventListener('click', (event) => {
//   if (!carrinhoArea.contains(event.target) && !abrirCarrinhoButton.contains(event.target)) {
//     carrinhoArea.classList.remove('aberto');
//   }
// }); 
// fechar carrinho no icone x
fecharCarrinhoButton.addEventListener('click', () => {
  carrinhoArea.classList.remove('aberto');
});

function adicionarAoCarrinho(idProduto) {
const produto = catalogo.find((p) => p.id === idProduto);
const containerProdutosCarrinho = document.getElementById("produtosCarrinho");
const cartaoProdutoCarrinho = `<article>
    <button id="fechar-carrinho"">
      <i></i>
    </button>
    <img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      />
    <div>
      <p>
        ${produto.nome}
      </p>
      <p>Tamanho: M</p>
      <p>$${produto.preco}</p>
    </div>
  </article>`;
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
// containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;


for (const produtoCatalogo of catalogo) {
  document
    .getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
}
}