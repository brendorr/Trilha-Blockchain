const numbers = [1, 2, 3, 4]; 
try {const count = countOccurrences(null, 1); 
    console.log(count); 
    
} catch (error) {
    alert(error);
    
}



function countOccurrences(array, searchElement) {
    if(!Array.isArray(array))
        throw new Error(`argumento passado nao é um array`)
    
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}