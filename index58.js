console.log("Index 58");

// set in JavaScript - A collection of well defined objects
const mySet = new Set(); // Intialize an empty set
console.log('The Setlooks like:', mySet);

// Adding Values in Set
mySet.add('This');
mySet.add(56);
mySet.add('my name');
// This dubara nhi le ga q kay repeated hai
// It preserve unique values
mySet.add('This');

mySet.add(22);
mySet.add(true);
mySet.add('The set looks like:', mySet);

// let mySet2 = new Set([1, 34, 'that', false]);
// console.log("New set is: ", mySet2);
//console.log(mySet2.has(34));

console.log("Before Removal: ", mySet);
mySet.delete('my name');
console.log("After Removal: ", mySet);

// Iterate a set using (for of loop)
for (let item of mySet) {
    console.log('Item is: ', item);
}

mySet.forEach((item) => {
    console.log('Item is: ', item);
});
