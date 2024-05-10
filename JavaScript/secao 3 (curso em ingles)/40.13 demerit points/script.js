function checkspeed(speed){
    let points = 0;
    if (speed <= 74)
        return "ok";
    if (speed >= 130)
        return "license suspended";
    if (speed >= 75)
        return points = Math.floor((speed - 70) / 5);
    
        


}
let speed = 82;
console.log(checkspeed(speed))