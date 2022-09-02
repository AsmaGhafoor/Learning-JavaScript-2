console.log('INDEX 16');

let element= document.createElement('li');
let text= document.createTextNode('I am a Text Node');
element.appendChild(text);

//Add a class name to the li element
element.className='childul';
element.id='createdLi'
element.setAttribute('title','mytitle');
// element.innerText='<b>Hello world!</b>' //simple plane text
// element.innerHTML='<b>Hello world!</b>' //innerHTML se bold ho raha hai

let ul=document.querySelector('ul.this')
ul.appendChild(element);
// console.log(ul);
// console.log(element);

//replace a element (we replace createdLi here)
let elem2 = document.createComment('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode
('This is a created node for elem2');
elem2.appendChild(tnode);             //error

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('fui'));

//To remove attribute
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.removeAttribute('title','mytitle');
console.log(elem2, pr);

//Quiz
/*Create an element with text as go to code with 
harry and create an a tag outside it with 
href = "https://www.codeeithharry.com"
*/


// let div = document.querySelector('div');
// console.log(div);
// let elem3 = document.createElement('a');
// elem3.setAttribute('href', 'https://www.codewithharry.com');
// console.log(elem3);
// let elem4 = document.createElement('h2');
// console.log(elem3);
// let text1 = document.createTextNode('Go to CodeWithHarry');
// elem4.appendChild(text1)
// elem3.appendChild(elem4);

// div.appendChild(elem3);



//ASSIGNMENT-----
// let variOne = document.createElement("h1");
// variOne.innerHTML = "Go to code with harry";
// variOne.setAttribute("id", "myid");
// variOne.setAttribute("class", "myclass");

// let forBodyTag = document.querySelector("body");
// //console.log(forTag); //uncomment it and check have selected whole body tag
// forBodyTag.append(variOne); //append varione with bodytag

// let link = document.createElement("a");
// link.innerHTML = "<b>Go now</b>";
// link.setAttribute("href", "https://www.codewithharry.com");
// link.setAttribute("id", "link");
// link.setAttribute("class", "link");

