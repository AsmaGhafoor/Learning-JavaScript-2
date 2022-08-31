console.log("Index 44");

let a = "Asma";
a = undefined;
if (a != undefined) {
    throw new Error('This is not undefined');
}
else {
    console.log('This is defined')
}

// reference error
// type error

try {
    //sashkjdhl
    console.log("We are inside try block");
    functionAsma();

} 
catch (error) {
    console.log("Are you okay");
    //error ka name
    console.log(error.name);
    //error ka message
    console.log(error.message);
} 
finally{
    console.log("Error aye ya nhi ye run hoga")
}
