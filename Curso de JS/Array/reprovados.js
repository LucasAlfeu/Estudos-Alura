const nomes = ['Anna', 'Marcos', 'Maria', 'Mauro', 'Lucas'];
const notas = [7, 4.5, 8, 7.5, 4];

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)
// ---------- o filter retorna um booleano, se for true para o elementos, ele adiciona em um arrey, caso for falso, ele só ignora  -----------
console.log(reprovados)

// const carros = ['Onix', 'HB20', 'Ferrari', 'Astra', 'Corsa'];
// const consumo = [14.3, 9.1, 16, 7, 14.6];

// const preferencia = carros.filter( (carro, indice) => consumo[indice] > 10)

// console.log(preferencia)