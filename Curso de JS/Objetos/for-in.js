const cliente = {
    nome: 'Lucas',
    idade: 23 , 
    email: 'a1feu@outlook.com'
}

let relatorio = '';
for( let info in cliente) {
    relatorio += `${info} `
}

//console.log(relatorio)

let relatorio2 = '';
for( let dados in cliente) {
    relatorio2 += `${cliente[dados]} `
}
//console.log(relatorio2)

let relatorio3 = '';
for( let dados in cliente) {
    if (typeof cliente[dados] === 'object' || typeof cliente[dados] === 'function') {
        continue
    } else {
        relatorio3 += `
        ${dados} - ${cliente[dados]}
        `
    }
}
//console.log(relatorio3)