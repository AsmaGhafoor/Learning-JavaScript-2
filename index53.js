console.log("Index 53");

// Generators in JavaScript
// 1 se 1 million numb tak 

function* numberGen(){
    let i=0;

    // yield 1;
    // yield 2;
    // yield 3;
    while(true){
        yield i++;
        //yield (i++).toString();
    }
}
const gen = numberGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);




