console.log("INDEX 30");

const proto={
    slogan: function(){
        return `This company is best.`
    },
    changeName: function(newName){
        this.name = newName
    }
}

//This create a object

//a name ka function proto se
let a = Object.create(proto);
//set name and role
a.name="a";
a.role="Programmer";
console.log(a);
 
//This also create a object
const a1 = Object.create(proto,{
    name:{values:"a", writable: true},
    role: {values:"Programmer"},
});

a1.changeName("Asma");
console.log(a1)



//Employee Constructor an its Object
function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

//Slogan
Employee.prototype.slogan=function(){
    return `This is Company`
}

let emp = new Employee("asma",35000,90);
console.log(emp.slogan());

//Programmer(inherit by Emplloyee)
//Programmer name ka constructor jisko Employee se inherit kiya
function Programmer(name, salary, experience, languague) {
    Employee.call(this, name, salary, experience);
    this.languague=languague;
}

//Inherit the Prototype
Programmer.prototype=Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor=Programmer;


let Asma= new Programmer("Asma", 2, 0, "Javascript");
console.log(Asma);


