const botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault(); // previne o evento padrão do elemento
    
    const form = document.querySelector('#form-adiciona')

    const paciente = obtemPacienteDoFormulario(form)
    console.log(paciente)    

    const erros = validaPaciente(paciente)
    console.log(erros)

    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    adicionarNaTabela(paciente)
    
    form.reset()
    const ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''
})

function adicionarNaTabela(paciente){
    const pacienteTr = montaTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function exibeMensagemDeErro(erros){
    const ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''
    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    });
}

function obtemPacienteDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(Number(form.peso.value), Number(form.altura.value))
    }
    return paciente
}

function montaTr(paciente){
    const pacienteTr = document.createElement('tr') // cria tags html
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome')) // transforma em tags filhos as que estao dentro dos parenteses e a tag pai é a que chama a função
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    let erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push('Peso Inválido')
    } 

    if(!validaAltura(paciente.altura)){
        erros.push('Altura Inválida')
    }

    if(paciente.nome.length == 0){
        erros.push('O nome não pode estar em branco')
    }
    if(paciente.peso.length == 0){
        erros.push('O peso não pode estar em branco')
    }
    if(paciente.altura.length == 0){
        erros.push('A altura não pode estar em branco')
    }
    if(paciente.gordura.length == 0){
        erros.push('A gordura não pode estar em branco')
    }
    return erros
}