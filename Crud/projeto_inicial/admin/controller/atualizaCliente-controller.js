import { clienteService } from "../service/cliente-service.js"

( async () => {
    const pegarURL = new URL(window.location)

    const id = pegarURL.searchParams.get('id')
    
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
    
    const dados = clienteService.detalhaCliente(id)
    inputNome.value = dados.nome
    inputEmail.value = dados.email
    
    console.log(inputNome.value)
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
    
        await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
        window.location.href = '../telas/edicao_concluida.html'
    })
})
()

