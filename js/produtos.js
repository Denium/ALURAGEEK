async function obterProdutos() {
  const configFetch = {
    method: "GET",
}
  const produtosData = await fetch("https://json-server-sigma-seven.vercel.app/products" , configFetch);
  const produtos = await produtosData.json();
//https://json-server-sigma-seven.vercel.app/
  return produtos;
}

async function criarProduto(nome,preco,imagem){
  const produtosData = await fetch("https://json-server-sigma-seven.vercel.app/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      preco: `R$ ${preco}`,
      imagem: imagem,
    })
  });
  const produtos = produtosData.json();
  return produtos;
}


async function deletarProdutos(id) {
  try {
      const response = await fetch(`https://json-server-sigma-seven.vercel.app/products/${id}`,{
          method: 'DELETE',
      });
      if (!response.ok) {
          throw new Error('Erro ao deletar produto');
      }
      return true;
  } catch (error) {
      console.error('Erro ao deletar produto:', error);
      throw error;
  }
}


export const produtos = {
  obterProdutos,
  criarProduto,
  deletarProdutos
}

