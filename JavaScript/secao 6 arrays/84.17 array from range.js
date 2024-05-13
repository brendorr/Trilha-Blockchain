function range(min,max){
    const saida = [];
    for(let i = min;i<=max;i++){
        saida.push(i);
    }
    return saida;
}

const teste = range(4,12)
console.log(teste);