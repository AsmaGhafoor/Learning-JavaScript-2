console.log('INDEX 8');

//If ELSE

//This is string and print with number because it check or compare the value only not a type.
const age=45;

if(age!=19){
    console.log('Age is not 19');
}
if(age !== 45){
    console.log('Age is not 45');
}
else{
    console.log("Age is not 19");
}
//Agr type or value dono check krne hon to === lagaen gay
// !== its mean if value and type are not matching.


//To check Variable is exist or Not.
let vari=60;
if(typeof vari !== 'undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is defined');
}


let doesDrive=true;
//let doesDrive=false;
//if(doesDrive || age>=50)
if(doesDrive && age>=67){
    console.log('Can Drive');
}
else{
    console.log('You can not drive');
}

console.log(age==30 ? 'age is 30' : 'age is not 30');


switch (age){
    case 18:
        console.log('You are 18');
        break;
    case 28:
        console.log('you are 28');
        break;
    case 38:
        console.log('you are 38');
        break;
    default:
        console.log('You are unknown age');
        break;
}

//agr break nhi lagaen gay to sb statement print hon gi.
