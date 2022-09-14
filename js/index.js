// Inserindo produtos na main a partir da dataBase
function inserindoProdutosMain(dataBase) {
  for (let i = 0; i < dataBase.length; i++) {
    let produtoAtual = dataBase[i];
    document.querySelector(".listaProdutos").insertAdjacentHTML(
      "afterbegin",
      `
      <li class="produto">
      <div class="caixaImg">
        <img src="${produtoAtual.img}" alt="" />
      </div>
      <span class="tagProduto">${produtoAtual.tag}</span>
      <h2 class="tituloProduto">${produtoAtual.nameItem}</h2>
      <p class="informacaoProduto">${produtoAtual.description}      
      </p>
      <p class="precoProduto">R$${produtoAtual.value},00</p>
      <button id="${produtoAtual.id}" class="adcCarrinho">${produtoAtual.addCart}</button>
    </li>
    `
    );
  }
}
inserindoProdutosMain(data);

//  layout dos produtos no carrinho

function inserindoProdutosCarrinho(produto) {
  countProdutos++;
  soma += produto.value;
  console.log(soma);
  document.querySelector(".qtdProdutos").innerHTML = `${countProdutos}`;
  document.querySelector(".somaProdutos").innerHTML = `R$ ${soma},00`;
  document.querySelector(".listaProdutosCarrinho").insertAdjacentHTML(
    "afterbegin",
    `
    <li>
    <div class="asideImgProduto">
      <img src="${produto.img}" alt="" />
    </div>
    <div class="asideInfoProdutos">
      <h2>${produto.nameItem}</h2>
      <p>R$${produto.value},00</p>
      <button id="${produto.id}" class="removeCarrinho">Remover produto</button>
    </div>
    </li>
            `
  );
}

// variaveis para trabalhar com a quantidade de itens no carrinho e o valor dos produtos
let countProdutos = 0;
let soma = 0;

// interceptando o clique no botão de adicionar ao carrinho na main e chamando a função para enviar o  layout dos produtos ao carrinho
let botoesProduto = document.getElementsByClassName("adcCarrinho");

for (let i = 0; i < botoesProduto.length; i++) {
  let botao = botoesProduto[i];

  botao.addEventListener("click", function (event) {
    let elemento = event.target;
    let id = parseInt(elemento.id);
    let produto = procuraProduto(id);
    if (!produto) {
      alert("Produto não cadastrado na base de dados");
    } else {
      inserindoProdutosCarrinho(produto);
    }
  });
}

// procurando o produto pelo seu ID

function procuraProduto(id) {
  for (let j = 0; j < data.length; j++) {
    let produto = data[j];
    if (produto.id == id) {
      return produto;
    }
  }
  return false;
}

// removendo produtos do carrinho

let tagUlCarrinho = document.querySelector(".listaProdutosCarrinho");
tagUlCarrinho.addEventListener("click", function (event) {
  let botaoRemover = event.target;

  if (botaoRemover.tagName == "BUTTON") {
    botaoRemover.closest("li").remove();
    countProdutos--;
    document.querySelector(".qtdProdutos").innerHTML = `${countProdutos}`;
    soma -= soma;
    document.querySelector(".somaProdutos").innerHTML = `R$ ${soma},00`;
  }
});
