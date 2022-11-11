// sorting an array of string using local compare method
const names =[
'smdsayeed',
'kasheef',
'irfan',
];
 
names.sort((a,b)=>{  //takes two parameters

return a.localeCompare(b);
})
console.log(names)


//ouput:[irfan,kasheef,smdsayeed]
