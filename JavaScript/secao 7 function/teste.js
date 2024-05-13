// podemos fazer variaveis apontar para funcoes
let run = function(){
    console.log(`funcao referenciada`)
}
run();

// toda a funcao possui um array chamado arguments que possui todos os elementos passados como parametro
function sum (){
    let total = 0;
    console.log(arguments);
    for(let a of arguments){
        total = total+a;
    }
    return total; // possivel fazer essa funcao usando o array.reduce
}
console.log(sum(1,5,3,4));


// function sum(...args) isso faz com que args vire todos os argumentos passados

// possivel usar o operador logico || para determinar um valor default para os parametros de uma funcao
function interest(principal, rate = 3.5, years = 5){ // se rate e years nao forem passados na chmada a da funcao, vao assumir os valores
    // rate = rate || 3.5 outra maneira de fazer
    return principal * rate /100*years;

}

// getters and setters existem
// try and cacth
const person = {
    firstName: `brendo`,
    lastName: `rodrigues`,
    set fullname(value){
        if(typeof value !== `string`)
            throw new Error(`Valor passado nao é uma string`);
        const parts = value.split(` `);
        if (parts.length !== 2){
            throw new Error('Insira um nome e sobrenome corretamente')

        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}
try {
    person.fullname = ``;
}
catch(e){
    alert(e);
}