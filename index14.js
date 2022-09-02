console.log('INDEX 14');

// DOM means pura document

/*
Element Selector

1. Single element selector
2. Multi element selector

*/

// let element=document.getElementById('myfirst');

// element=element.className; // element ka class name ajaye ga.
// element=element.childNodes;
// element=element.parentNode;
// element.style.color='red';
// element.innerText='PAF KIET';
// element.innerText='<h1>PAF KIET</h1>';

// let v=document.querySelector('myfirst');
// v=document.querySelector('child');
// v=document.querySelector('h1');
// v.style.color='green';

// console.log(element);


// 2. Multi element selector
let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');
elems=document.getElementsByTagName('div');
//console.log(elems[1].getElementsByClassName('child')); //error

console.log(elems);

