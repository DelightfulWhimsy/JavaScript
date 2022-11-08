
//for Each loop
/* for each loop calls a function once for each array element*/

const num = [2,3,4,5]
num.forEach((element)=>{
console.log(element*element)
})



// Array.form
/* select a random website on a browser 
open the developer tools.
select an element which has classes.
 now let a = document.getElementByClassName("class names")
 now wirte typeof a in the console. -->now prints object
 Array.from(a)--> converts the html collection into an array
 */

let name = "sayeed"
let arr = Array.from(name)
console.log(arr)

//expected: ["s","a","y","e","e","d"]

//For ...of loop
const num = [2,3,4,5]
for(let i of num){
console.log(i)
}

//expected: 2345


//for ..in loop
const num = [2,3,4,5]
for(let i in num){
console.log(i)
}

//expected : 0 1 2 3 4 
/* because the array also is kind of object which has keys and values
but cant't be seen like in an object
in Array the indexing values are the keys of an array*/
