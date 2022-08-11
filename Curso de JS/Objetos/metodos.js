const cliente = {
    nome: 'Lucas',
    idade: 23 , 
    email: 'a1feu@outlook.com'
}

const prop = Object.keys(cliente)
const prop2 = Object.values(cliente)
const prop3 = Object.entries(cliente)

console.log(prop3[1][1])