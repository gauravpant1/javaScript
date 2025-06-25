const employee= {
    calcTax (){
        console.log("tax rate is 10%");
    }
};

const emp1 = {
    salary: 30000,
    calcTax() {
        console.log("tax rate is 15%");
    },  
};

emp1.__proto__ = employee;   // Prototype


// Class
class ToyotaCar {
    constructor(brand){
        console.log("Creating new object."); // constructor
        this.brand = brand;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
   
}

let fortuner = new ToyotaCar("Fortuner");  // constructor


// Inheritance

class Person{
    constructor(){
     console.log("Parent Constructor");
        this.species = "Homo sapiens";
    }
    eat(){
        console.log("Eat");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("Child Constructor");
       super();  // super keyword --> "super" is used to call the constructor of its parent class to acess the parent's properties and methods.
        this.branch = branch;
    }
    work(){
        console.log("Programming.")
    }
}

let engObj = new Engineer("Electronics");

 
