import { produtos } from './produtos.js';
const formulario = document.querySelector('[data-formulario]');

function limparForm() {
  //ajeitar botão de limpar cards (melhor tentativa)!
  const limparBotao = document.getElementById("limpar_btn");
  limparBotao.addEventListener("click", () => {
    console.log("teste limpar");
    formulario.reset();
  })
}

document.getElementById('addProdutoFormulario').addEventListener('submit', async function (event) {
  event.preventDefault();


  async function criaCard(evento) {
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const preco = document.querySelector('[data-preco]').value;
    const imagem = document.querySelector('[data-imagem]').value;

    await produtos.criarProduto(nome, preco, imagem);

    formulario.reset();
    alert("Produto cadastrado com sucesso!");
  }

  formulario.addEventListener('submit', evento => criaCard(evento));
 
})
limparForm();





// clearButton.addEventListener('click', () => formulario.reset());



// function limparForm() {
//   document.getElementById('addProdutoFormulario').reset();
// }
// });


