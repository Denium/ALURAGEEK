import { produtos } from "./produtos.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, preco, imagem, id) {
  const produtoLi = document.createElement("li");
  produtoLi.className = "produtos_bloco";
  produtoLi.innerHTML = `
  <div class="section__produtos">
  <img class="produtos_imagem" src="${imagem}">
  <h3 class="produtos_descricao">${nome}</h3>
  <button class="produtos_descartar" data-id="${id}">
  <p class="produtos_preco">${preco}</p>
  <img src="img/delete.png" alt="Ícone de lixeira">
  </button>
</div>`;

  const btnsDeletar = document.querySelectorAll(".produtos_descartar");
  btnsDeletar.forEach((btn) => {
    btn.addEventListener("click", async (evento) => {
      evento.preventDefault();
      await produtos.deletarProdutos(btn.id);
    });
  });

  return produtoLi;
}

// const deleteIcon = produtoLi.querySelector(".produtos_descartar")
//   deleteIcon.addEventListener("click", async () => {
//     try {
//       await produtos.deletarProduto(id)
//       constroiCard() // Recarregar os jogos após a exclusão
//     } catch (e) {
//       alert(e.message)
//     }
//   })

// const deleteButton = produtoLi.querySelector(".produtos_descartar");
// deleteButton.addEventListener("click", () => deletaProduto(id));

// produtos.appendChild(produtoLi);

//   document.querySelectorAll('.produtos_descartar').forEach(button => {
//     button.addEventListener('click', async (event) => {
//         const id = event.currentTarget.getAttribute('data-id');
//         await deletarProduto(id);
//         await mostraProdutos();
//     });
// });

// async function deletaProduto(id) {
//   if (confirm("Tem certeza que deseja deletar este produto?")) {
//     try {
//       await produtos.deletarProduto(id);
//       const productCard = document
//         .querySelector(`[data-id='${id}']`)
//         .closest(".card");
//       if (productCard) {
//         productCard.remove();
//       }
//       alert("Produto deletado com sucesso");
//     } catch (err) {
//       console.error("Erro ao deletar o produto:", err);
//       alert("Não foi possível deletar o produto. Tente novamente mais tarde.");
//     }
//   }
// }

async function escreverNaTela() {
  try {
    const listaApi = await produtos.obterProdutos();
    listaApi.forEach((elemento) =>
      lista.appendChild(
        constroiCard(elemento.nome, elemento.preco, elemento.imagem)
      )
    );
  } catch {
    lista.innerHTML = `<span>Não foi possível carregar a lista de cards</span>`;
  }
}

escreverNaTela();
