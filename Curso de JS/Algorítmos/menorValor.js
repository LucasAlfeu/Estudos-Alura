const livros = require('./listaLivros.js')

function menorValor(arrProdutos, posicaoInicial){    
    let menorPreco = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual ++) {
        if(arrProdutos[atual].preco < arrProdutos[menorPreco].preco){
            menorPreco = atual;
        }
    }
    return menorPreco;
}


module.exports = menorValor;