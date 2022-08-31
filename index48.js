console.log("Index 48");

// Regular Expresssions
// Basic Functions
// Metacharacter Symbols
// Character Sets

let regex=/A[a-z]ma/;
regex=/A[^aty]ma/; // ye aty nhi match hon gay - Not aty
const str="Asma";


// Quantifiers - we use[]
regex=/Asma Ghafo{2}r/; //o can occur exactly 2 times
str="Asmaa Ghafoor";


// Groupings - we use paranthesis for grouping()
regex=/(asm){2}/

let result=regex.exec(str);
console.log("Result is : ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the Expresssions ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}




