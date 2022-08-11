const botao = document.querySelector('#buscar-paciente')
botao.addEventListener('click', function(){
    console.log('buscarei pacientes')

    const xhr = new XMLHttpRequest()
    
    // Ensina o tipo de requisição de o xml e onde ele vai buscar
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    //evento que ouve a resposta 
    xhr.addEventListener('load', function(){
        const erroAjax = document.querySelector('#erro-ajax')

        if (xhr.status == 200) {
            erroAjax.classList.add('invisivel')
            const resposta = xhr.responseText
            const pacientes = JSON.parse(resposta)
            pacientes.forEach(function(paciente){
            adicionarNaTabela(paciente)})
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)

            erroAjax.classList.remove('invisivel')
        }


    })

    // Pega a requisição e envia ela
    xhr.send()
})