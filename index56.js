console.log("Index 56");

// ----------- For Loop -----------
// for in loop - Jab 1 object ki keys ko lena hai or obj ko ietrate krna hai
// for of loop - Ye loop kisi be iterable ke sath use kr sakte hain

// Traditional for loop
people=["Asma","Asma","Asma","Asma","asma"];
// for (let index=0; index<people.length; index++){
//     const element=people[index];
//     console.log(element);
// }


obj={
    name:"asma",
    language:"JavaScript",
    hobbies:"learning"
}
console.log(obj);

//Iterating an Object using Traditional for loop
for (let index=0; index<Object.keys(obj).length; index++){
    const element=obj[Object.keys(obj)[index]];
    console.log(element);
}

//Iterating an Object using Traditional for loop
// agr object ki keys ko iterate krna ho
for(let key in obj){
    // . ke sath string nhi use hogi isliye key bracket me aye ga
    console.log(obj[key]);
}

myString ="This is my String.";
for(let char in myString){
    // . ke sath string nhi use hogi isliye key bracket me aye ga
    console.log(myString[char]);
}

console.log("*************For of Loop Starts here*************")
people=["Asma","Asma","Asma","Asma","asma"];
for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}
