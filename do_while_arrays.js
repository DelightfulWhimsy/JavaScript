// create an array of numbers and take input from the user to add numbers to the array

let arr= [1,2,3,4]
let a;
do {
   a = prompt("Enter a value to add in the array") 
  a= Number.parseInt(a)
arr.push(a)
console.log(arr)

} while (a!=0)
