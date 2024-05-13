const numbers = [1,2,3,4,4];

function except(array,excluir){
    const Resultado = [];
    while(excluir != []){
        let numeroARemover = excluir.pop();
        Resultado = array.filter(item => item !== numeroARemover);
    }
    return Resultado;
}
const teste = except(numbers,4);
console.log(teste);// tudo errado

// jeito certo

const numberss = [1,2,3,4,4];

function exceptt(array,excluded){
    const output = [];
    for (let element of array){
        if(!excluded.includes(element))
            output.push(element);
    }
    return output;
}

const testee = exceptt(numberss,[4]);
console.log(teste)
