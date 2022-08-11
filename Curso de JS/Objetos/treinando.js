function Carro (nome, cor, potencia, consumo, vel) {
    this.nome = nome;
    this.cor = cor;
    this.potencia = potencia;
    this.consumo = consumo;
    this.motorLigado =  false
    this.vel = 0;

    this.ligar = function(instrucao) {
        if ( instrucao == 'ligado') {            
            return this.motorLigado = true;    
        } else if (instrucao == 'desligado') {
            return 'O carro desacelerou até parar';
        }

    }

    this.acelerar = function (velocidade) {
        if (this.motorLigado == true) {
            this.vel = velocidade
        if(velocidade < 10) {
            return 'Engrenou a primeira marcha';
        } else if ( 10 <= velocidade || velocidade < 20) {
            return 'Engatou a segunda marcha';
        } else if ( 20 <= velocidade || velocidade < 40) {
            return 'Enagtou a terceira marcha'
        } else if ( 40 <= velocidade || velocidade < 60) {
            return 'Engatou a quarta marcha, cuidado ao dirigir na cidade'
        } else if ( velocidade >= 60) {
            return 'Engatou a quinta marcha, cuidado com o limite de velocidade'
        }    
        } else {
            return 'O motor precisa estar ligado para acelerar'
        }

    }
}

const astra = new Carro('Astra', 'Prata', '121 cv', '8 km/l')
astra.ligar('ligado')
astra.acelerar(40)
console.log(astra)