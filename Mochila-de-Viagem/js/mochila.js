const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem('itens')) || [] // o local storage sobrescreve os itens, salvando em um array esse itens não serao reescritos. o JSON.parse transforma a string em um elemento reconecido pelo javasciprt

itens.forEach((elemento) => {
    criaElemento(elemento)
});
form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    console.log(nome.value)

    const existe = itens.find(elemento => elemento.nome === nome.value)
    console.log(existe)
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if(existe){
        itemAtual.id = existe.id
        console.log(itemAtual.id)
        atualizaElemento(itemAtual)
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else {
        itemAtual.id = itens.lengt
        criaElemento(itemAtual)
        itens.push(itemAtual)
    }

    // o Local storage salva dados no navegador, qualquer pessoa pode vizualiza-las na ferramenta do desenvolvedor
    localStorage.setItem('itens', JSON.stringify(itens)) // o local storage só salva dados do tipo string. o JSON.stringify transforma o objeto em string

    nome.value = ''
    quantidade.value = ''
})
function criaElemento(item){
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    console.log(numeroItem.dataset.id)
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome
    
    novoItem.appendChild(deletaBotao(item.id))
    
    lista.appendChild(novoItem)
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function deletaBotao(id){
    const elementoBotao = document.createElement('button')
    elementoBotao.innerHTML = 'X'

    elementoBotao.addEventListener('click', function() {
       removeElemento(this.parentNode, id)
    })
    return elementoBotao
}

function removeElemento(tag, id){
    tag.remove()
    console.log(id)
}