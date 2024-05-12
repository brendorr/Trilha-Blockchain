function sandwiche(pao,carne){
    return {
        pao: pao,
        carne: carne,
        preparado: function(){
            console.log(`um sandiwche com pao ${this.pao} e carne ${this.carne} foi preparado`)

        }
    }
}

const sandwiche1 = sandwiche(`arabe`,`mal passada`)
const sandwiche2 = sandwiche(`arabe`,`bem passada`)
sandwiche1.preparado()
sandwiche2.preparado()

function areEquals(sandwiche1,sandwiche2){
    for(key in sandwiche1){
        if(sandwiche1[key] !== sandwiche2[2])
            return false;
    }
    return true
}
function aresame(sandwiche1,sandwiche2){
    if(sandwiche1===sandwiche2)
        return true;
    return false;
}

console.log(areEquals(sandwiche1,sandwiche2));
console.log(aresame(sandwiche1,sandwiche2));