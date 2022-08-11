const pessoa = {
    nome: 'Lucas',
    idade: 23,
    telefone: [33361482, 999995436],
    dependentes: [{
        nome: 'Ayla',
        parentesco: 'filha',
    },  
        {nome: 'Carlos',
        parentesco: 'sobrinho'
    }]
}

console.log(pessoa.dependentes[0].nome)