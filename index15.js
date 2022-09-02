console.log('INDEX 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// //child nodes text or comment ko  manta hai
// console.log(cont.childNodes); 

// // ye container key andar k text,new lines,comments ko nhi maney ga ye simply elements ko maney ga.
// //children is better than child nodes
// console.log(cont.children);


let nodeName=cont.childNodes[1].nodeName;
let nodeType=cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);

//Node Types
// 1. element
// 2. Attributes
// 3. Text Node
// 8. Comment
// 9. document
// 10.doctype

let container = document.querySelector('.container');
//children kay children k liye
//console.log(container.children[1].children[0].children) //error

console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);


console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);



