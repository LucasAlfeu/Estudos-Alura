const primeiro = [1,2,3];
const segundo = [4,5,6];

const unindo = [...primeiro,...segundo] // Operador spread
//console.log(unindo)

const cliente = [{
    nome: 'Lucas',
    idade: 23,
    telefone:[{
        fixo: 33361482,
        celular: 999995436,
    }]
}, {
    nome: 'Felipe',
    idade: 25,
    telefone: [{
        fixo: 3345968 ,
        celular: 997542365
    }]    
}]

for (let i = 0; i < cliente.length; i++) {
    const lista = [...cliente[i].telefone];
    //console.table(lista)
}

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const personagem = {...fichaGuerreiro, ...equipoGuerreiro};
console.log(personagem)