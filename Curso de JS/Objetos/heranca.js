class Cliente {
    constructor(nome, cpf, saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(`R$ ${this.saldo},00`)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, saldo, saldoPoupanca){
        super(nome, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
    exibirSaldoPoupanca() {
        console.log(`R$ ${this.saldoPoupanca},00`)
    }
}

const lucas = new ClientePoupanca('Lucas', '173191867-48', 0, 0)
//console.log(lucas)

lucas.depositar(100);
lucas.depositarPoupanca(200)
//console.log(lucas)

lucas.exibirSaldo();
lucas.exibirSaldoPoupanca()