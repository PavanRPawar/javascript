console.log("Lecture 1");

fullName = 'Pavan';
console.log(fullName);

age = 23;
console.log(age);

price = 99.99;
console.log(price);

x = null;
console.log(x);

y = undefined;
console.log(undefined);

isFollow = true;
console.log(isFollow);


let name = "Bhavesh";
console.log(name);

var price = 25;
var price = 28;
var price = 5;

// let age = 10;
// let age = 12;
// let age = 15;

const value = 84;
// value = 96;


console.log(typeof(fullName));
console.log(typeof(age));
console.log(typeof(price));
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(isFollow));


const student = {
    name: 'Pavan',
    age: '23',
    cgpa: '8.43',
    isPass: true,
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student["name"]);

student.name = 'Bhavesh';
student["age"] = 20;
console.log(student);
console.log(student.name);
console.log(student.age);