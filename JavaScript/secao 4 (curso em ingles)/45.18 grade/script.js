function grade (grade){
    let total = 0;
    for(let a of grade){
        total = total + a;
    }
   let  media = total / grade.length;

    if  (media >= 1 && media <= 59) return "F";
    if (media >=60 && media <= 69) return "D";
    if (media >=70 && media <= 79) return "C";
    if (media >=80 && media <= 89) return "B";
    if (media >=90 && media <= 100) return "D";
}

let marks = [80,80,50];

console.log(grade(marks));
