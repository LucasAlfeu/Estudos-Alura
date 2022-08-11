const pessoa = {
    nome: 'Lucas',
    idade: 23 ,
}

const pessoa2 = Object.create(pessoa);

pessoa2.nome = 'Carlos';
pessoa2.idade = 45;

console.log(pessoa);
console.log(pessoa2);