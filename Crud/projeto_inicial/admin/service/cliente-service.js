// const listaClientes = () =>{
//     const promise = new Promise((resolve, reject) =>{
//         // Comunicação entre máquinas
//         const http = new XMLHttpRequest()

//         // abrindo a comunicação entre a aplicação e a api
//         http.open('GET', ' http://localhost:3000/profile') // os agumentos são o que eu vou pedir e pra onde eu vou enviar

//         http.onload = () => {
//             if(http.status >= 400){
//                 reject(JSON.parse(http.response))
//             } else {
//                 resolve(JSON.parse(http.response))
//             }
//         }
//         //Enviar nossa reqisição
//         http.send() 
//     })   
//     console.log(promise)  
//     return promise
// }

const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) //O fetch faz as mesmas funções que o http request e o promise
    .then( resposta => {
        return resposta.json()
    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Contente-Type' : 'aplication/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then ( resposta => {
        return resposta.body
    })
}

const deletaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        return resposta.json()
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'alpication/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    deletaCliente,
    detalhaCliente,
    atualizaCliente
}