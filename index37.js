console.log('Index 37');

// Call back Functions
// Call ack functions are synchronous and asynchronous

//This responce is coming from server
const student =[
    {name:"asma", course:"Javascript"},
    {name:"amna", course:"Machine learning"}
]

// function ke andar function
function enrollStudent(students, callback){
    /*Set timeout ye kar rha hai k jo ho rha hota 
    rahy ga background me or wo 3000 sec k bad 
    sambhal le ga*/
    setTimeout(function(){
        student.push(students);
        console.log('Students are enrolls');
        callback();
    }, 3000);
}

function getStudents(){
    setTimeout(function(){
        let str="";
        student.forEach(function(students) {
            str += `<li> ${students.name} </li>`
        });
        document.getElementById('student').innerHTML=str;
        console.log('Students are fetch');
    },1000);
}

let newStudents = {name:"asma", course:"python"};
enrollStudent(newStudents, getStudents);
//getStudents();


