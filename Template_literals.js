//  Template literals : template literals use backticks(`) instead of double quotes to define a  string
// With template literals it is possible to use both the singel quote as well as double quotes inside a string.
  
      let sentence = `The name "is" sayeed`
      console.log(sentence)
      
      //output : The name is sayeed
      
      ******Can insert variables directly in template literal, This is called as STRING INTERPOLATION ************
      
      let name = 'sayeed'
      let a = `This is ${name}`  //here name is the defined variable
      
      console.log(a)
      
      //output: This is sayeed


// Escape Character sequences

  //we can use \ inside a string 
//   Escape character sequence are as follow
//   \n = New Line
//  \t = Tab
//  \r = carriage return
    let mname = `shaik.\tMohammed sayeed`
    console.log(mname)

//ouput : shaik.    Mohammed sayeed

