// const nome = 'Lucas';
// let lista = [];

// for (let i = 0; i < nome.length; i++) {
//     lista.push(nome.charAt(i));
// }
// console.log(lista);

// const novaLista = lista.map(letra => letra.toUpperCase());
// console.log(novaLista);

const lista = ['João', 'Carlos', 'José', 'Lucas', 'Levi', 'Algusto', 'Caio', 'Rodrigo'];
console.log(lista)

function filtro(nome) {
    return nome.length >= 6;
}

const listaFiltrada = lista.filter(filtro);
console.log(listaFiltrada)