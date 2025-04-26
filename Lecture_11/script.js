console.log("Lecture 11");

// const student = {
//     fullName: "Pavan Pawar",
//     marks: 84.30,
//     printMarks: function () {
//         console.log("Makrs = ", this.marks);  // student.marks
//     },
// }
// console.log(student);
// console.log(student.fullName);
// console.log(student.marks);
// console.log(student.printMarks);
// console.log(student.printMarks());
// console.log(student.toString);


// Prototypes
// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     }
// }
// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("Tax rate is 20%");
//     }
// }
// karanArjun.__proto__ = employee;
// console.log(karanArjun);
// console.log(karanArjun.calcTax());


// Classes
class ToyotaCar {
    constructor(brand) {           // constructor
        console.log("creating new object");
        this.brand = brand
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    // setBrand(brand) {
    //     // this.brandName = brand;
    //     this.brand = brand;   // this.brand - object property
    // }
}

// Object
// let fortuner = new ToyotaCar();
// console.log(fortuner);
// console.log(fortuner.start());
// console.log(fortuner.stop());
// fortuner.setBrand("fortuner")  // add property
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus") // constructor


// Inheritance
// class Parent {
//     hello() {
//         console.log("Hello");
//     }
// }
// class Child extends Parent {}
// let obj = new Child()
// console.log(obj);
// console.log(obj.hello());

// class Person {
//     constructor(name) {
//         console.log("enter parent constructor");
//         this.species = "homo sapiens"
//         this.name = name
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
//     work() {
//         console.log("do nothing");
//     }
// }
// class Engineer extends Person {
//     constructor(branch, name) {
//         console.log("enter child constructor");
//         super(name);    // to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit child constructor");
//     }
//     work() {
//         super.eat()
//         console.log("solve problems, build something");
//     }
// }
// let pavanObj = new Engineer("Computer Engg", "pavan")
// console.log(pavanObj);
// console.log(pavanObj.work());
// console.log(pavanObj.eat());
// console.log(pavanObj.sleep());


// Q1. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.
let DATA = "secret information"
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    viewData() {
        console.log("data - ", DATA);
    }
}
let student1 = new User("bhavesh", "bhavesh@gmail.com");
let student2 = new User("nilesh", "nilesh@gmail.com");

console.log(student1);
console.log(student1.viewData());
console.log(student2);
console.log(student2.viewData());


// Q2. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        DATA = "some new value"
    }
}
let admin1 = new Admin("admin", "admin@gmail.com")
console.log(admin1);
console.log(DATA);
console.log(admin1.editData());
console.log(DATA);