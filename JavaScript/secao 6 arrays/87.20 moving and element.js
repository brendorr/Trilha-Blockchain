function move (array,index,offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error(`posicao invalida`)
        return
    }
    const output = [...array];
    const element = output.splice(index,1)[0];
    output.splice(position,0,element);
    return output


}
const numbers = [1,2,3,4]

