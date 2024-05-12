function fizzbuzz (a){
   if ((a % 3 == 0))
       console.log("fizz")
   if  (a % 5 == 0)
       console.log("buzz")
   if ((a % 3 == 0) && (a % 5 == 0))
      console.log("fizzbuzz")
   if (typeof a != 'number') 
      console.log(NaN)
   if (!((a % 3 == 0) || (a % 5 == 0))) 
    console.log(a)


}
let a = 3
fizzbuzz(a)