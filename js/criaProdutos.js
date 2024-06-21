import { produtos} from './produtos.js';
const formulario = document.querySelector('[data-formulario]');

 async function criaCard(evento){
  evento.preventDefault();

  const nome = document.querySelector('[data-nome]').value;
  const preco = document.querySelector('[data-preco]').value;
  const imagem = document.querySelector('[data-imagem]').value;
  try {
    await produtos.criarProduto(nome,preco,imagem);
  } catch (e) {
    alert(e);
  }
 }

 formulario.addEventListener('submit', evento => criaCard(evento));