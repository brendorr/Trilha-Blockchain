const numbers = [1,2,3,4];

function includes(array,elemento){
    for(i = 0;i < array.length;i++){
        if(array[i]=== elemento) return true;
    }
    return false;
}

console.log(includes(numbers,2));