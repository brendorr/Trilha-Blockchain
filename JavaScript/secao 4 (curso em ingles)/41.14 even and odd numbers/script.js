function shownumbers(limit){
    for (i = 0; i <= limit; i++){
        if (i == 0)
            console.log(i,"EVEN")
        
        if (i % 2 == 0 && i != 0)
            console.log(i,"EVEN")
        if (i % 2 != 0)
            console.log(i,"ODD")
    }
}

let i = 10;
shownumbers(10);