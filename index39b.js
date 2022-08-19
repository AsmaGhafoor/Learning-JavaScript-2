console.log('Index 39 b');

//Promise se call back function ka kam!


//This responce is coming from server
const student = [
    { name: "asma", course: "Javascript" },
    { name: "amna", course: "Machine learning" }
]

function enrollStudent(students, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            student.push(students);
            console.log('Students are enrolls');
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 5000);

    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        student.forEach(function (students) {
            str += `<li> ${students.name} </li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log('Students are fetch');
    }, 1000);
}

let newStudents = { name: "asma", course: "python" };
enrollStudent(newStudents).then(function () {
    getStudents();
}).catch(function () {
    console.log('Error Accured');
})

// then -> is run as resolve 
// catch -> is run as  reject









