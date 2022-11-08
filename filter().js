//filter()-- filters an array with values that passes a test creates a new array

const num = [1,2,3,4,5]
let arr =num.filter((value)=>{
  return value<3
})
console.log(arr)

//expected: [1,2]
