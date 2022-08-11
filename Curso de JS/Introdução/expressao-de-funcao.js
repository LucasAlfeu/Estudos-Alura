//declaração de função
function subtrai (a,b) {
    return a-b;
}
console.log(subtrai(5,2));

// Expressão de função ou função anônima
const soma = function (a, b) {return a+b}
console.log(soma(3,4));

//Arrow-Function
const multiplica = (a,b) => {
    if (a > 10 || b > 10) {
        return 'Somente números entre 1 e 9"'
    } else {
        return a * b;
    }
}

console.log(multiplica(5,4));