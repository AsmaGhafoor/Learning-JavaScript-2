//TASK
console.log('INDEX 13');

/*you have to create a variable which have string containing the text which is a link you are 
interested in*/
/*you have to fetch all the links from a given page
which contain this */


let str="python";
let links = document.links;
console.log(links);

let href;

Array.from(links).forEach(function(element) {
    href = element.href;
    if(href.includes(str)){
        console.log(href);
    }
    
})
