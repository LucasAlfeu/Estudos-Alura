const priBimestre = 10;
const segBimestre = 6.5;    
const terBimestre = 8;  
const quarBimestre = 7.5;

const calculaMedia = (nota1, nota2, nota3, nota4) => {
    const media = (nota1 + nota2 + nota3 + nota4) / 4
    return media;
}
 console.log(calculaMedia(priBimestre, segBimestre, terBimestre, quarBimestre));
