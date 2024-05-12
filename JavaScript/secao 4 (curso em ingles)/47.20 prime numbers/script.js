function primo(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function showprimes(limit){
    for(i = 0; i <= limit;i++){
        if(primo(i)){
            console.log(i);
        }
    }
}

showprimes(20);