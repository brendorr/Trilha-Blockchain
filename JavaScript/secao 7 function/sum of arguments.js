function soma(...args){
    if (Array.isArray(args[0]))
        return args[0].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    else
    return args.reduce((acumulador,valorAtual) => acumulador + valorAtual,0)
}

console.log(soma(1,2,3,4));