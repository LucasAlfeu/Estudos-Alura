const sala1 = [7,8,8,5,6,8];
const sala2 = [6,8,4,9,5,10];
const sala3 = [8,10,6,3,7];

function media(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0 )
    return somaDasNotas / notasDaSala.length
}

console.log(`A media da sala 1 é ${media(sala1)}`);
console.log(`A media da sala 2 é ${media(sala2)}`);
console.log(`A media da sala 3 é ${media(sala3)}`);