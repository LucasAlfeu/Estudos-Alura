function Cliente(nome, idade, cpf, saldo) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.saldo = saldo;

    this.depositar = function (valor) {
        return this.saldo += valor;
    }
}

const lucas = new Cliente('Lucas', 23, '17319186748', 0)

Cliente.prototype.sacar = function (valor) {
    return this.saldo -= valor;
}
Cliente.prototype.sobrenome = this.sobrenome;

lucas.sobrenome = 'Alfeu';

lucas.depositar(100)
lucas.sacar(20)
console.log(lucas)