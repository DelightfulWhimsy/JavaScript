
//using filter method we are filtering out the array where the vlaues are divisible by 10
let arr = [ 10,20, 30,12,34,534]
 let n =arr.filter((x)=>{
  return x%10==0
})
console.log(n)
