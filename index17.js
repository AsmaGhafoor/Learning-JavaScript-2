console.log('INDEX 17');

//EVENTS
/*Jab browser se interact krte hain kisi web page key sath jese k link.
ya mouse ko kisi element me le gaye ya cut copy paste
JavaScript se apko capability deta hai in events ko capture krne ki or
in events k hone k bad ap certain code run krte hain or
page ko interactive banate hain
*/

//Event ko listen krta hai
document.getElementById('heading').addEventListener
('click', function(e)
{
    let variable;
    console.log('You have click on heading'); //error
    variable=e.target;
    variable=e.target.className; // class de ga jo html ke code me class ka name diya hoga.
    variable=Array.from(e.target.classList);
    variable=e.target.id;
    variable=e.offsetX; // click pr element milay ga 
    variable=e.offsetY;
    variable=e.clientX; // ye client k hisab se click pr number deta hai
    variable=e.clientY;
    console.log(variable);

    //location.href='//codewithharry.com'
} 
);










