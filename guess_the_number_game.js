/* A program to generate random number*/
let random_number = Math.floor(Math.random()*100+1)

let guess;
let score = 100;
do{
guess =Number.parseInt( prompt("Guess the number"));  //converting the string into the number
//checking condition
  if(guess>random_number){
    console.log("Lower number please🙏");
    console.log(`your score is now :${--score}`);
  }else if(guess<random_number){
    console.log("Higher number please🙏");
    console.log(`your score is now: ${--score}`);
    
  }
}while(guess!==random_number);
    console.log(`Hurray 🥳, you guessed it right 🤝, score: ${score}`);
