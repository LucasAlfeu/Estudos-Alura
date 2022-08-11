const cliente = {
    saldo: 0,

    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo);
cliente.depositar(100);
console.log(cliente.saldo);