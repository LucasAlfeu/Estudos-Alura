/* Uma função callback é uma função passada a outra função como argumento,
que é então invocado dentro da função externa para completar 
algum tipo de rotina ou ação. */

const nomes = ['Lucas', 'Anna', 'Alfeu', 'Jullia'];

nomes.forEach(exibeNomes);
    // o forEach é uma função que recebe outra função, exibeNomes, realizando uma tarefa

function exibeNomes(nome) {
    //console.log(nome);
}

// -------map()------
// Diferente do forEach ele retorna dados em formato de um array
const notas = [10, 9, 8, 7, 6];

const novasNotas = notas.map(nota => nota == 10 ? nota : ++nota);
//console.log(novasNotas);


const lista = ['anna Jullia', 'lUCAS Alfeu', 'Pedro caio'];

const listaAtualizada = lista.map(nome => nome.toUpperCase());
console.log(listaAtualizada)