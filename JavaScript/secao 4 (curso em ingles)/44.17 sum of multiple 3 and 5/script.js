function sum (limit){
    let sum = 0;
    for(i = 0;i <= limit;i++)
        {
            if(i % 3 === 0)
                {
                    sum = sum + i;
                }

            if (i % 5 === 0){
                sum = sum + i;
            }    
        }
        
    return sum;    
}

let teste = 10;
console.log(sum(10));