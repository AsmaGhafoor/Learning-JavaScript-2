console.log('INDEX 10');

// //Function is a block of code

// // let name2='fatima'
// // let name3='amna'
// //console.log(`Happy Birthday! ${name} `);
// // console.log(`Happy Birthday! ${name2}`);
// // console.log(`Happy Birthday! ${name3}`);

// let name='asma'


// // Function 1
// function greeting1(name, thank){
//     console.log(`Happy Birthday! ${name} and ${thank}!`);
// }
// greeting1(name, 'Thanks a lot');


// // Function 2
// function greeting2(name, thank){
//     console.log(`Happy Birthday! ${name} and ${thank}!`);
//     return 123;
// }
// //is me kch return lazmi krwaen gay function me
// let val= greeting2(name, 'Thanks a lot');
// console.log(val);


// // Function 3
// let mygreet = function greeting(name, thank){
//     let msg = `Happy Birthday! ${name} and ${thank}!`;
//     return msg;
// }
// let val2= mygreet(name, 'Thanks a lot');

// //Object me function bana sakte hain is tarha
// let myobj={
//     name: 'asma',
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game());

// arr=['fruit','vegetables'];
// arr.forEach(function(element,index,array)
// {
//     console.log(element,index) 
// });


// SCOPE IN JAVA SCRIPT
// let and const have block level scope
// var have block level scope

if(1)
{
    // if here we let than error accures b/c of block level scope.
    var i=234;
    console.log(i);
}

//var i=345
console.log(i);

function ui(name)
{
    let i=9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("ASMA"),i);

