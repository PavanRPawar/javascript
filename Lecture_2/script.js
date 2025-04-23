console.log("Lecture 2");

let a = 10;
let b = 5;

// Arithmetic Operators
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("Exponentiation - a ** b = ", 2 ** 3);

// Unary Operators
console.log("Increment - ++a = ", ++a);
console.log("Decrement - --b = ", --b);

// Assignment Operators
console.log("a += 4 = ", a += 4);    // a = a + 4

// Comparison Operators
let x = 3, y = 2, z = '3'
console.log("x == y | 3 == 2 ", x == y);
console.log("x != y | 3 != 2 ", x != y);
console.log("x == z | 3 == '3' ", x == z);
console.log("x != z | 3 != '3' ", x != z);
console.log("x === z | 3 === '3' ", x === z);
console.log("x !== z | 3 !== '3' ", x !== z);
console.log("x > y ", x > y);
console.log("x >= y ", x >= y);
console.log("x < y ", x < y);
console.log("x <= y ", x <= y);

// Logical Operators
console.log("true && true ", true && true);
console.log("true && false ", true && false);
console.log("true || false ", true || false);
console.log("!true ", !true)

// Conditional Statements (if)
let age = 25;
if (age > 18) {
    console.log("you can vote");
}

// if-else Statement
let mode = "light";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);

// else-if Statement
let age1 = 16;
if (age1 < 18) {
    console.log("junior");
} else if (age1 > 60) {
    console.log("senior");
} else {
    console.log("middle");
}

// Ternary Operators
age >= 18 ? console.log("adult"): console.log("not adult");

