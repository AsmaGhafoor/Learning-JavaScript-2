console.log('INDEX 7');

//Arrays

let marks=[78,89,67];
const fruits=['Orange','Apple','Pineapple'];
console.log(marks);

const arr =new Array (78,89,67,77, 'Mango');
console.log(arr);
console.log(marks);
console.log(fruits[1]);

// //property
console.log(arr.length);
console.log(Array.isArray('dfdf'));  //Kiya array me ye value hai?

arr[0]='asma';
let arrelement=arr[0];
console.log('element: ', arrelement);
console.log(arr);

let value=marks.indexOf(67);
console.log(value);

//Mutating and modifying(Change the  arrays)
marks.push(78);      //array k end me element 78 add krna hai
console.log(marks);
marks.unshift(44);   //array k start me element 44 add krna hai
console.log(marks);
marks.pop();         //end se 1 element hat jaye ga
console.log(marks); 
marks.splice(1,3);   //Slice is index se start kr k itne elements hata deta hai
console.log(marks);
marks.push(70);
marks.push(72);
marks.push(76);
marks.push(75);
console.log(marks);
marks.reverse();    //Array ko reverse krta hai
console.log(marks);

let marks2=[1,2,3,4];
marks= marks.concat(marks2); // Marks array me Marks 2 ki sb values b add ho jaen gi
console.log(marks);

let myobj={
    name : 'asma',
    id : '10305',
    isActive : true,
    Marks :78 
}
console.log(myobj);
console.log(myobj.Marks); // we can access the elements
console.log(myobj.isActive); //we can access the elements
console.log(myobj.isActive);



