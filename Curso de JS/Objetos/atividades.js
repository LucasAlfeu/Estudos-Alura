const pessoa = {
    nome: 'Peter Parker',
    idade: 25,
    cpf: '00025698751',
    telefone: '24999995436',
    estado: 'RJ',
}
 
console.log(pessoa);

pessoa.endereco = 'Avenida Jaraguá, 370, casa 47';

console.log(pessoa);

delete pessoa.estado;

console.log(pessoa);