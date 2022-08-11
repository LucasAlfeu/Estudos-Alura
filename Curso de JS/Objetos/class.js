class Cliente {
    constructor (nome, cpf, email, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor) {
        return this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const lucas = new Cliente('Lucas', '17319186748', 'a1feu@outlook.com', 0)
lucas.depositar(100)
lucas.exibirSaldo()
console.log(lucas)