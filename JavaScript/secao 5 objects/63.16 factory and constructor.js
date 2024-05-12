function sandwiche(pao,carne){
    return {
        pao: pao,
        carne: carne,
        preparado: function(){
            console.log(`um sandiwche com pao ${this.pao} e carne ${this.carne} foi preparado`)

        }
    }
}

const sandwiche1 = sandwiche(`arabe`,`mal passada`)
const sandwiche2 = sandwiche(`arabe`,`bem passada`)
sandwiche1.preparado()
sandwiche2.preparado()

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    
    this.saudacao = function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
}

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

pessoa1.saudacao()
pessoa2.saudacao()