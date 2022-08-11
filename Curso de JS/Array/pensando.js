// e se concatenarmos elementos com um array com o metodo conact()...
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

/*O elemento será adicionando, mas como não modificamos o array original
sempre que formo adicionar um elemento novo teremos que criar um novo
array o que se torn inviável se compararmos com o metodo push */ 

/*concat() é um método útil quando não se deseja alterar o array original,
e sim fazer uma cópia alterada. Caso isso não seja necessário, 
considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.*/ 