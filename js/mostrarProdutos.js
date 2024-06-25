import { produtos } from "./produtos.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, preco, imagem, id) {
  const produtoLi = document.createElement("li");
  let btnId = `produtos_descartar_${id}`;
  produtoLi.className = "produtos_bloco";
  produtoLi.innerHTML = `
  <div class="section__produtos">
  <img class="produtos_imagem" src="${imagem}">
  <h3 class="produtos_descricao">${nome}</h3>
  <div style="display:flex;
  justify-content:space-between;">
    <p class="produtos_preco">${preco}</p>
    <button id="${btnId}" class="produtos_descartar" data-id="${id}" >
      <img src="img/delete.png" alt="Ícone de lixeira">
    </button>
  <div>
</div>`;

  const btnsDeletar = produtoLi.querySelector(`#${btnId}`);

  btnsDeletar.addEventListener("click", async (evento) => {
    evento.preventDefault();
    await produtos.deletarProdutos(id);
  });

  return produtoLi;
}

async function escreverNaTela() {
  try {
    const listaApi = await produtos.obterProdutos();
    listaApi.forEach((elemento) =>
      lista.appendChild(
        constroiCard(
          elemento.nome,
          elemento.preco,
          elemento.imagem,
          elemento.id
        )
      )
    );
  } catch (error) {
    console.log(error);
    lista.innerHTML = `<span>Não foi possível carregar a lista de cards</span>`;
  }
}

escreverNaTela();
