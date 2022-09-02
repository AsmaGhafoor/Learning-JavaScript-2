console.log('INDEX 5');

//Type Conversion 

let myVar;
myVar;
myVar=String(83);
console.log(myVar,(typeof myVar));

let booleanVar=String(true);
console.log(booleanVar, (typeof booleanVar));

let date=String(new Date());
console.log(date, (typeof date));


let arr=String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let a=1;
console.log(a.toString());

let b=new Date;
console.log(b.toString());

let str=Number('234');
//str=Number('23g4');
//str=Number('true');
//str=Number('false'); 
console.log(str, (typeof str));

var num=parseInt('25');
var num=parseFloat('25');
console.log(num.toFixed(2), (typeof num));



//Type coercion

let mystr='234';
let mynum=9;
console.log(mystr+mynum);