console.log('INDEX 9');

//loops

// loops tab tak chalte hain jab tak condition false na ho jaye.

//General Loops : for, while, do-while

let a=5;
a+=2;
console.log(a);

console.log('For Loop');
for(let i=0; i<=5; i++)
{
    console.log(i);
}

console.log('While Loop');
let j=0;
while(j<15){
    console.log(j+1);
    j+=1;
}

console.log('Do While Loop');
let k=0;
do{
    //end me +1 horha hai
    console.log(k+1);
    if(k===5){
        //jab loop bahar jana ho to break use krte hain
        break;
    }
    k+=1;
}
while(k<10)
console.log('done');

// let b=0;
// do{ 
//     //continue se 1 iteration skip hoti hai
//     if(b===5){
//         b+=1;
//         continue;
//     }
//     console.log(b+1);
//     b+=1;
// }
// while(b<10);

let arr=[2,3,4,5];
console.log('1st method');
// arr.forEach(function(element){
//     console.log(element);
// });

console.log('2nd method');

//backup of foreach loop
// for(let n=0; n<arr.length; n++){
//     const element=arr[n];
//     console.log(element);
// }

let obj={
    name : 'asma',
    id : '10305',
    Field : 'BSCS'
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}

