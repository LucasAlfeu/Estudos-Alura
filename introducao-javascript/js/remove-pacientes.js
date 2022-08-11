let pacientesLista = document.querySelectorAll('.paciente')
const tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', function(event) {
    console.log(event.target) // alvo de onde o evento se originou
    // let alvo = event.target
    // let paiDoAlvo = alvo.parentNode
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function () {            // essa função manda o javascript esperar um determinado tempo passado para executar uma função
       event.target.parentNode.remove() 
    }, 500) // o tempo é passado em ms    
})



// quando colocamos eventos em uma tag filha a tag pai também ouve... ou seja se colocarmos um evento no pai e clicarmos no filho ele conseguirá ouvir o evento

// pacientesLista.forEach(function (paciente){
//     paciente.addEventListener('dblclick', function () {
//         console.log('tudo certo')
//         this.remove()
//     })
// })