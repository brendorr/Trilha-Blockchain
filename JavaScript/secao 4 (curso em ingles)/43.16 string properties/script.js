function showproperties(objeto){
    for (let a in objeto){
        if(typeof objeto[a] === 'string')
            console.log(a, objeto[a])
    }
}

const movie = {
    title: 'a',
    realeseyear: 2018,
    rating: 4.5,
    director: "b"

};

showproperties(movie)