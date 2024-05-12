function counttruthy(array){
    let count = 0;
    for (let a of array){
        if (a != 0 && a != null && a != undefined  && a != '' && a != false && a != 0 && a != NaN)
            count++;
        
    }
    return count
        
}// tudo errado

function countCorreto(array){
    let count = 0;
    for (let a of array){
        if(a)
            count++;
    }
    return count
        
}

let array = ['a',1,3,0,NaN]
console.log(countCorreto(array))