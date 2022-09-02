console.log('INDEX 20');

//Local Storage and Session Storage

// Inspect -> Application -> Storage -> Local Storage
// it have key and value

//We can store values in local storage of JS and can read them later.
//Key or value dein gay or wo save ho jaen gi

//Add a key value in local storage
localStorage.setItem('Name','Asma');
session.localStorage.setItem('Name2','Fatima');

//ye string me store kar rha or puri string retrive kr rha
//Islye JSON lagaen gay.

let impArray = ['Fruit','Vegetables','Sweets'];
localStorage.setItem('Fruittype', JSON.stringify(impArray) );

//To clear the entire local storage.
//localStorage.clear();

//Clear a particular key-value pair.
localStorage.removeItem('Name');

let name =localStorage.getItem('Name');
//name =localStorage.getItem('Fruittype');
//To convert upper line in array
name = JSON.parse(localStorage.getItem('Fruittype'));
console.log(name);

/*JSON.parse string leta as an arrgument or 
return krta hai 1 object

stringify -> vice verse
*/

/*Js code comment browser off phr b local storage hamesha rahay ga 
lekin session storage khtam ho jaye ga */

//To Clear the Both Storage on console.
// sessionStorage.clear()
// localStorage.clear()
