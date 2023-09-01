// import { catalogo } from "./src/utilidades";
// import { adicionarAoCarrinho } from "./menuCarrinho";

// export function renderizarCatalogo() {
//   for (const produtoCatalogo of catalogo) {
//     const cartaoProduto = `<div id="card-produto-${produtoCatalogo.id}" class="card-produto">
//         <img
//           src="./assets/img/${produtoCatalogo.imagem}"
//           alt="Produto 1 do Magazine Hashtag."
//         />
//         <p>${produtoCatalogo.marca}</p>
//         <p>${produtoCatalogo.nome}</p>
//         <p>$${produtoCatalogo.preco}</p>
//         <button id="adicionar-${produtoCatalogo.id}"><i class="fa-solid fa-cart-plus"></i></button>
//       </div>`;

//     document.getElementById("container-produto").innerHTML += cartaoProduto;
//   }

//   for (const produtoCatalogo of catalogo) {
//     document
//       .getElementById(`adicionar-${produtoCatalogo.id}`)
//       .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
//   }
// }

