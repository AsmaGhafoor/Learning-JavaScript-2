console.log("Index 59");

// Symbols
const sym1 = Symbol("My identifiers");
const sym2 = Symbol("My identifiers");

// console.log("Symbol is: ", sym1);
// console.log("Type of Symbol is: ", typeof sym1);

console.log(sym1 === sym2);

const a = "this is";
const b = "this is";
console.log(a === b);

console.log(null === null);
console.log(undefined === undefined);

// Symbols are unique - apne ap me unique hote hain
const a2=Symbol();
const a1=Symbol();
myObj={};
myObj[a1]="Asma";
myObj[a2]="Asma Ghafoor";
myObj["name"]="Asma G";
console.log(myObj[a1]);
console.log(myObj);

// SYmbols are ignored in (for in loop)
for(key in myObj){
    console.log(key,myObj[key]);
}
console.log(JSON.stringify(myObj));