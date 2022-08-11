const lista1 = [12,35,14,62,89];
const lista2= [2,4,6,8,10];

lista1.push(01);//adicionar elementos na ultima posição
console.log(lista1);

lista1.pop();//removendo o ultimo elemento
console.log(lista1);

console.log(lista1.length);

console.log(lista1.concat(lista2));    //unindo dois arrays

console.log(lista1.filter( (numero) => numero % 3 == 0)); //faz um teste com todos os elementos e os verdadeiros retorna dentro de um array

console.log(lista1.find( numero => numero % 2 == 0)); //encontra o primeiro elemento que der true no teste;

console.log(lista1.findIndex( numero => numero % 2 == 0)); //encontra o primero elemento que der true no teste e retorna seu indice

console.log(lista1.indexOf(89)); //retorna o indice de um elemento do array em que digitamos entre parenteses

lista2.forEach(numero => console.log(numero**2)); //Somente executa uma função para cada elemento de um array

const modifica = lista2.map(numero => numero + 1); //Realiza uma função em cada elemento do array e retorna dentro de um outro array
console.log(modifica)

const res = lista2.reduce(numero => numero += numero)
console.log(res)

console.log(lista2.includes(8)) //procura um elemento dentro de um array e retorna um boolean