console.log('INDEX 21');

/* 
You have to create a div and inject it into the page which 
contains the heading.
whenever someone clicks on ht div,it should be converted into 
an editable item.
Wheneever usr clicks away(blur). save the note into 
th local Storage.
*/

//Create a New Element
let divElem = document.createElement('div');
//Add text to that Element
let val = localStorage.getItem('text');
let text;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);
// let text = document.createTextNode('This is my element');
// divElem.appendChild(text);

//Give Element id,style and class
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
//divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin:34px; padding:23px;');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

//Grab the main container
let container = document.querySelector('.container');
let first =document.getElementById('myfirst');

//Insert the Element defore Element with Id first
container.insertBefore(divElem, first);

divElem.appendChild(text);
console.log(divElem, container, first);


//add Event Listner to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});
