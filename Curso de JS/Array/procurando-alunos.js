const alunos = ['João', 'Juliana', 'Caio', 'Ana', 'Lucas'];
const notas = [10, 7, 9, 6, 5]

const listaDeNotasEAlunos = [alunos, notas];

const exibirNotas = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ' sua nota é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return 'O aluno não está cadastrado';
    }
}

console.log(exibirNotas('Lucas'));

// const carros = ['Onix', 'HB20', 'Ferrari', 'Astra', 'Corsa'];
// const consumo = ['14.3 km/l', '9.1 km/l', '16 km/l', '7 km/l', '14.6 km/l'];
// const cor = ['Preto', 'Branco', 'Vermelho', 'Prata', 'Cinza'];

// const mostruario = [carros, consumo, cor]

// const mostraCarro = (nomeDoCarro) => {
//     if (mostruario[0].includes(nomeDoCarro)) {
//         let i = mostruario[0].indexOf(nomeDoCarro);
//         return `O ${mostruario[0][i]} tem um consumo de ${mostruario[1][i]} e sua cor é ${mostruario[2][i]}`;
//     } else {
//         return 'Carro não cadastrado';
//     }
// }

// console.log(mostraCarro('Corsa'));