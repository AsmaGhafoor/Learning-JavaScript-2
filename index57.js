console.log("index 57");

// Maps in JavaScript - we can use any type of key or value

const myMap=new Map();
console.log(myMap);

const key1="myStr", key2={}, key3=function() {};

// Setting map values
// .set key or value leta hai
myMap.set(key1, "This is a string");
myMap.set(key2, "This is a blank object");
myMap.set(key3, "This is a empty function");

console.log(myMap);


//Getting the values from a Map
let value1=myMap.get(key1);
console.log(value1);

//Get the size of the map
console.log(myMap.size);

//You can loop using (for of) to get keys and values
for(let [key,value]of myMap){
    console.log(key,value);
}

// Get only keys 
for(let key of myMap.keys()){
    console.log("Keys are:", key);
}

// Get only value 
for(let value of myMap.keys()){
    console.log("value are:", value);
}

// You can loop through a map using for each loop
// Value phele likhyn gay key bad me
myMap.forEach((value,key)=>{
    console.log('key is', key);
    console.log('value is',value);
})

// Converting a map to an array
let myArray=Array.from(myMap);
console.log("Array Map is: ", myArray);

// Converting a map to an array
let myKeysArray=Array.from(myMap);
console.log("Map to keys Array is: ", myKeysArray);

// Converting a map to an array
let myValuesArray=Array.from(myMap);
console.log("Values Map of an Array is: ", myValuesArray);

