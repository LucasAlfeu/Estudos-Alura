function imprimeNomeEmail(tipoCliente, agencia){
  console.log(`
    ${tipoCliente} da agência ${agencia}:
    - nome: ${this.nome}, email: ${this.email}
    `)
 }
 
 const cliente1 = {
  nome: "Carlos",
  email: "c@email.com"
 }
 
 const cliente2 = {
  nome: "Fred",
  email: "f@email.com"
}

/* --------- cal() ---------*/
// imprimeNomeEmail.call(cliente1, "cliente especial", "1001")
// // cliente especial - nome: Carlos, email: c@email.com

// imprimeNomeEmail.call(cliente2, "cliente estudante", "1002")
// // cliente estudante - nome: Fred, email: f@email.com

/* ---------- apply() ------------ */
// const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
// const clienteEstudante = ["cliente estudante", "Fortaleza"]

// imprimeNomeEmail.apply(cliente1, clienteEspecial)
// // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

// imprimeNomeEmail.apply(cliente2, clienteEstudante)
// // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

/* ----------- bind() ----------- */
const personagem = {
  nome: "Princesa Leia",
  apresentar: function(){
    return `a personagem é ${this.nome}`
  }
}

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())