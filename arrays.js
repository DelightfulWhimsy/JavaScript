// Array methods

const n = [1,2,3,]
n.toString();  // toString() used to convert the array elements into strings
console.log(n)

//expected ouput: 1,2,3, which has become a string

let n1=[74,5,6]
n1.join("and")
console.log(n1)


//expected output: 74 and 5 and 6
//join() joins the array elements with the provided arguments in it.

 const rm = [1,2,3,4]
 rm.pop()  //removes the last element from the array
let m = rm.pop()
 console.log(rm , m)  //pop returns the poped element
 //expected output: [1,2,3,]


let a = [1,2,3]
let b = a.shift() //removes the first element and returns it also modifies the original array
console.log(b , a)
// output: 1, [2,3]

let num = [1,2,3,4]
num.unshift(33) // adds elements to the beginning
console.log(num)

//output: [33,1,2,3]

let num = [1,2,3,4]
delete num[0]  //array elements can be deleted using the delete operator
console.log(num)

//expected OUtput: [<1 empty element>, 2,3,4]

