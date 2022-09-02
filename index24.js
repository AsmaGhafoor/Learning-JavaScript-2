console.log('INDEX 24');

let today = new Date();

console.log(today);

//console.log(typeof today);

let otherDate = new Date('1-4-2005 04:56:08')
otherDate = new Date('August 1 1998');
otherDate = new Date('09/16/1998');

console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);

otherDate.setDate(23); //We can set date
otherDate.setMonth(1);  //We can set month
otherDate.setFullYear(1900);
otherDate.setMinutes(1);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);

//0 for Monday
//1 for Tuesday
//2 for Wednesday
//3 for Thursday
//4 for Friday
//5 for Saturday
//6 for Sunday