console.log('Index 31');

//ES6 Syntax --New JavaScript
//Class is a blueprint
//Class ka object baney ga to constructor run hoga

class Employee {
    constructor(Empname, Empexperience, Empdivision) {
        this.name = Empname;
        this.experience = Empexperience;
        this.division = Empdivision;
    }
    slogan() {
        return `I am ${this.name} and this company is the best.`
    }
    //Function
    JoiningYear() {
        return 2020 - this.experience;
    }
    // baghair class ke object ke use kr skte ye method
    // Static method me this use nhi hota
    static add(a, b) {
        return a + b;
    }
}

//Inheritance
// Class Programmer ko inherit krein gay Employee se
class Programmer extends Employee {
    //Constructor aesa function hai jab object banate hain tab run hota hai
    constructor(Empname, Empexperience, Empdivision, language, github) {
        //Super means jis se ye programmer extend ho kar a raha hai uske constructor ko call krdo
        //Super mean phle wali class ka constructor
        super(Empname, Empexperience, Empdivision)
        this.language = language;
        this.github = github;
    }

    favouritelanguage() {
        if (this.language == 'python') {
            return 'Python';
        }
        else {
            return 'Javascript';
        }
    }

    static multiply(a, b) {
        return a + b;
    }
}


// obj1 = new Employee("Asma", 2, "BSCS");
// console.log(obj1);
// //Use of Static method
// console.log(Employee.add(2, 4))

obj2 = new Programmer('Asma', 3, "SE", "github", "Urdu");
console.log(obj2);
console.log(obj2.favouritelanguage());
console.log(Programmer.multiply(5, 8));



