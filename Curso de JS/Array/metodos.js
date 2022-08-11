const nomes = ['Lucas', 'Anna', 'Jullia', 'Carol', 'Felipe', 'Bruna', 'Augusto', 'Fernando', 'Bia', 'Quezia', 'Marcos'];
// console.log(nomes.length)

// dividindo um Array
const sala1 = nomes.slice(0,nomes.length/2);
/*/console.log(sala1.length)
console.log(sala1)*/

const sala2 = nomes.slice(nomes.length/2);
/*console.log(sala2.length)
console.log(sala2)*/

// excluindo elementos de um Array a partir de uma posição e quantos elementos queremos eliminar
nomes.splice(0, 3) 
// console.log(nomes)

// Concatenando duas Arrays
 const frutasM = ['Morango', 'Maracujá', 'Maçã'];
 const frutasL = ['Laranja', 'Limão', ];

 const frutas = frutasM.concat(frutasL);
//  console.log(frutas);

//Lista com duas Dimensões
const saladaDeFrutas = [frutasM, frutasL];
                            //Primeiro indice (0) se refere a qual elemento dentro de saladaDeFruta
// console.log(saladaDeFrutas[0][2]);
                                //Segundo indice (2) se refere a qual elemento dentro da Array indicada no primeiro indice

const idades = [30, 35, 28]
const nome = ["Ana", "Juliana", "Leonardo"]
const faculdade = [false, true, true]

//Matriz... semelhante a lista de duas dimensões entretanto com mais dimensões
funcionarios = [nome,idades,faculdade]

console.log(funcionarios[0][0])
console.log(funcionarios[1][0])
console.log(funcionarios[2][0])