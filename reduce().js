
/reduce()-- reduces the array to an single value.
here a , b are argumets (arguments = values which returns some output)

let arr = [1,2,3,4]
let new1 = arr.reduce((a,b)=>{
  return a+b
})
  console.log(new1)

//output 10


// used reduce () to calculate the factorial of the given number, from an array of the first n natural number
let arr = [1,2,3,4]
let n= arr.reduce((x1,x2)=>{
  return x1*x2
})

console.log(n)

//output: 24
