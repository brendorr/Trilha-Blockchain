/* NUMBERS*/
console.log(typeof 1); // isso vai printar o tipo do valor 1, que é number
console.log(1) //  isso vai printar o valor 1
console.log(5+5) // arimetica exatamente como nas outras linguagens
console.log(10 *(5+5)) // arimetica exatamente como nas outras linguagens
console.log(Infinity)  
console.log(-Infinity)
console.log(NaN) // Not a Number, usado quando o resultado de uma operação não é um número
console.log(typeof NaN) // isso vai printar o tipo do valor NaN, que é number. O que nao faz sentido, ja que ele NAO É UM NUMERO

/* STRINGS*/
console.log(typeof '1'); // isso vai printar o tipo do valor '1', que é string
console.log("testando") // isso vai printar o valor testando
console.log("Isso vai numa linha \n e isso vai em outra") 
console.log(`é possivel fazer operacoes dentro da string ${5+5}, como demostrado`)// só funciona se tiver crase (backtips)
console.log ("contatenando" + " strings") // contatenando strings

/* BOOLEAN*/
console.log(typeof true); // isso vai printar o tipo do valor true, que é boolean
console.log(true) // isso vai printar true
console.log (5 < 10) // isso vai printar true, ja que 5 é menor que 10
console.log (5 > 10) // isso vai printar false, ja que 5 não é maior que 10
console.log (10 == 10) // isso vai printar true, ja que 10 é igual a 10
console.log (10 != 10) // isso vai printar false, ja que 10 não é diferente de 10
console.log (10 === 10) // isso vai printar true, ja que 10 é igual a 10 e do mesmo tipo
console.log (10 <= 10) // isso vai printar true, ja que 10 é igual ou menor que 10
console.log("brendo" != "brendo") // isso vai printar false, ja que brendo é igual a brendo
console.log ("brendo" != "Brendo" && "brendo" == "brendo") // isso vai printar true, ja que brendo é diferente de Brendo e brendo é igual a brendo
console.log (10 < 5 || "brendo" == "brendo")    // isso vai printar true, ja que 10 não é menor que 5 mas brendo é igual a brendo
// operadores ternarios
console.log (10 > 5 ? "10 é maior que 5" : "10 não é maior que 5") // resumindo, se True, printa a primeira string, se False, printa a segunda string

/* UNDEFINED*/
console.log(typeof undefined); // isso vai printar o tipo do valor undefined, significa que a variavel não foi definida
console.log(typeof null) // objeto? isso é um erro de implementação do javascript, null é um valor nulo
console.log(null) // isso vai printar null, que é um valor nulo

/* conversoes */
console.log("brendo" * 5)   // isso vai printar NaN, ja que não é possivel multiplicar uma string por um numero
console.log("5" * 5) // isso vai printar 25, ja que é possivel multiplicar uma string que representa um numero por um numero
console.log(typeof ("5" * 5)) // percebeu que o resultado é um number