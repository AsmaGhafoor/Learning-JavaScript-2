console.log("INDEX 41");

// Arrow function
const asma = () => {
    console.log("This is me😁");
}

// Regular function
const greet = function () {
    console.log("Good morning!😁");
}

asma();
greet();

const greeting = function () {
    return ("Good night!😁");
}
console.log(greeting());

// One line will automatically return
var greeting1=() => "Good Afternoon!😁";

var greeting2=() => { 
    return ("Good night!😁") 
};

//Object ager 1 line me return hoga to parantheses lagaen gay
var greeting3=() => {{ name: "Asma"}};


var greeting4=(name,endname) => "Good morning" + name + endname;
console.log(greeting4(" Asma", " Ghafoor"));
