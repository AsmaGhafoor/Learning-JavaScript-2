console.log("INDEX 41");

// Arrow function
const asma = () => {
    console.log("This is meπ");
}

// Regular function
const greet = function () {
    console.log("Good morning!π");
}

asma();
greet();

const greeting = function () {
    return ("Good night!π");
}
console.log(greeting());

// One line will automatically return
var greeting1=() => "Good Afternoon!π";

var greeting2=() => { 
    return ("Good night!π") 
};

//Object ager 1 line me return hoga to parantheses lagaen gay
var greeting3=() => {{ name: "Asma"}};


var greeting4=(name,endname) => "Good morning" + name + endname;
console.log(greeting4(" Asma", " Ghafoor"));
