console.log("Index 43");

// Async/Await in Javascript 
// aync return a promise
// Await wait krta hai

// This function returns a promise b/c of async
async function myFunction() {
    console.log("Asma"); // await ko dekh kr ye ruk jaye ga
    const responce = await fetch('https://api.github.com/users')
    console.log('before response');
    const users = await responce.json();
    console.log('user resolved');

    return users ;
}

console.log("Before calling asma");
let a = myFunction();
console.log("After calling asma");
console.log(a);
// jab resolve ho jaye
a.then(data => console.log(data));
console.log("Last line of JS File"); 