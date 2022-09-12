function inserindoProdutos(dataBase) {
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
      <button class="adcCarrinho">${produtoAtual.addCart}</button>
    </li>
    `
    );
  }
}
inserindoProdutos(data);
