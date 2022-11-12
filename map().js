 
//map ()--- used to create a new array by performing some operations on each array element

const num = [1,23,34,34]
num.map((value,index,array)=>{ //new array
   console.log(value,index,array)
 
 })


//expected output
/* 1 0 [1,23,34,34]
23 1 [1,23,34,34]
34 2 [1,23,34,34]
45 3 [1,23,34,34] */


const arr= [1,2,3]
let a = arr.map((value)=>{
return value+1
})
console.log(a)

//[2,3,4]
//original array was[1,2,3]
