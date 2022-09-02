console.log('INDEX 27');

//OOP in JavaScript

// object is lye banatey hain k method run kr sakyn
let car = {
    name: 'Mercedes 800',
    topSpeed: 90,
    run: function () {
        console.log("car is running");
    }
}
//We have already seen constractor like these:
//New Keyword naya object banata hai 
//new Date(); 


//Creating a constructor for cars
//ye constructor 1 general car object banaye ga
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is Running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.topSpeed} km/H than Mercedes`)
    }

}
car1 = new GeneralCar('City', 180);
car2 = new GeneralCar('Carolla', 90);
car3 = new GeneralCar('Mehran', 60);
console.log(car1, car2, car3);
