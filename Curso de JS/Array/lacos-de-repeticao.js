const notas = [10, 6.5, 8, 7.5];

let somaDeNotas = 0;

//  --------------for--------

/*for (let i = 0; i < notas.length; i++) {
    somaDeNotas += notas[i];
}

const media = somaDeNotas / notas.length;

console.log(`A media entre as notas é ${media}`);*/

// --------forEach(Função dentro do parenteses para todos os elementos do array) -------

notas.forEach( nota => {
    somaDeNotas += nota
})

let media = somaDeNotas / notas.length;
console.log(`A media entre as notas é ${media}`)
