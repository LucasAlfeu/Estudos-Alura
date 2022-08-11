const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista'

const pacientes = document.querySelectorAll('.paciente');

for( let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];

    const tdPeso = paciente.querySelector('.info-peso');
    const peso = Number(tdPeso.textContent);

    const tdAltura = paciente.querySelector('.info-altura');
    const altura = Number(tdAltura.textContent);

    const tdImc = paciente.querySelector('.info-imc');


    let pesoEhValido = validaPeso(peso)
    let alturaEhValida = validaAltura(altura)

    if(!pesoEhValido){
        pesoEhValido = false
        tdImc.textContent = 'Peso inváliudo!'
        paciente.classList.add('paciente-invalido')
    }
    if(!alturaEhValida) {
        alturaEhValida = false
        tdImc.textContent = 'Altura inválida!'
        paciente.classList.add('paciente-invalido')

    }
    if( pesoEhValido == true && alturaEhValida == true) {
        const imc = calculaImc(peso, altura);    
        tdImc.textContent = imc;
    }  
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 500) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.00) {
        return true
    } else {
        return false
    }
}