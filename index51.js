console.log("Index 51");


//Error araha hai fruits undefined ho rhy
function fruitsIterator(values) {
    let nextIndex=0;
    //We will return a function
    return{
        next: function(){
            if (nextIndex<values.length){
                //we will return this object
                return{
                    value:values[this.nextIndex++],
                    done:false
                }
            }
            else{
                //We will return the below object with only done - iteratate the array
                return{
                    done:true
                }
            }
        }
    }
}

let myArray=['mango','apples','oranges','banana'];
console.log("My array is: ", myArray);

//Using the iterator
const fruits=fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);