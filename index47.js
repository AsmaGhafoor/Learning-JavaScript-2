console.log("index 47");

let regex=/Asma/;
// Meta Character Symbols
regex =/^Asm/;
// Ends with
regex =/^&sm/;
// Match hoga kisi 1 character se
regex =/^&a.m/;
// Matches any 0 or more characters
regex=/a*ma/;
// Optional
regex=/as?maa?/;
// Literally Match
regex=/as\*maa/;

let str="Asma is a student of pafkiet";
let result=regex.exec(str);
console.log("Result is : ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the Expresssions ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}






