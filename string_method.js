let name = "sayeed"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.replace("say","Sa"))
console.log(name.slice(2,3)) //slice up the strings with the indexing number is provided

let brother = "kasheef"
console.log(name.concat(" is a big brother of ", brother))  //concatinate strings

let sis = "  naila  "
console.log(sis)
console.log(sis.trim()) //removes the white spaces

/*strings are immutabel, In order to access the character at an index we use the following index*/
let n = "sayeed"+"kasheef"
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
name[5]="$" //This is not possible because string is immutable
console.log(name)

for(let i=0;i<n.length;i++)
  console.log(  n[i])


const sentence = " The quick brown fox jumps over the lazy dog"

const word = "fox"

console.log(`The word " ${word} " ${sentence.includes(word) ? ' is ' : ' is not ' } in a sentence `)  //used template literals and ternary conditional statement to compare the strings

// expected output: "The word "fox" is in the sentence"


const str = "hello world"
console.log(startsWith("hello"));
//expected ouput: true


const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false
