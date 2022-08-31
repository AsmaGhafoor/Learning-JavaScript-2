console.log("Index 46");

// Regular Expression literal

// Global search 

let reg = /Asma/;
//reg = /Asma/g; // g means Global flag - 2nd time ye match hoga
//reg = /Asma/i; // i means case insensitive
console.log(reg);
console.log(reg.source);


let s = "This is a great code with Asma and ASMA"
// Functions to match Expressions
// 1. exec() This function will return an array for match or null for no match

let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }
// // 3rd me asma name nhi to null aye ga
// console.log(result);


// 2. test() - Returns true or false
let result2 = reg.test(s);
console.log(result2);


// 3. match() - It will return an array of results or null
// let result3=reg.match(s); // This is wrong
let result3=s.match(reg);
console.log(result3);

// 4.search() - Returns index of first match else -1
let result4=s.search(reg); 
console.log(result4); // agr match nhi hoga "let reg" se to output -1 aye ga

// 5. replace() - Returns new all strings with all the replacements
let result5=s.replace(reg, "Asma Ghafoor");
console.log(result5);
