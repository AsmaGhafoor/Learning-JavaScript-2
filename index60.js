console.log("Index 60");

//  Destructing in JavaScript
let a, b;
[a, b] = [34, 23];
console.log(a, b);

// Extra Numbers d me store ho jayein gay with the help of .
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// Array Destructuring
({ a, b, c, ...d } = { a: 79, b: 89, c: 98, d: 87 });
console.log(a, b, c, d);

const fruits = ["apple", "banana", "Mangoes"];
[a, b, c] = fruits;
console.log(a, b, c);

// Object Destructuring
const laptop = {
    model: "Acer",
    age: "1 year",
    location: "Karachi",
    start: function () { console.log('Started'); }
}

const {model, age, location} = laptop;
console.log(model, age, location);
