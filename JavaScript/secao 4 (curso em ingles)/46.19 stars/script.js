function showstars(rows){
    for (i = 0; i <= rows; i ++){
        let pattern = "";
        for (j = 0; j < i; j++){
            pattern = pattern + '*';
            
        }
        console.log(pattern)
    }
}


showstars(10);