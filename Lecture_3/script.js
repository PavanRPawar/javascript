console.log("Lecture 3");

// for Loop -
// for (let i = 1; i <= 5; i++) {
//     console.log(i, " Hello world");
// }

//Calculate sum of 1 to 5
// let sum = 0;
// for (let i=1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);

//  while Loop -
// let i = 1;
// while (i <= 10) {
//     i++;
//     console.log("Apna College");
// }

// do-while Loop -
// let i = 20
// do {
//     console.log("Apna College");
//     i++;
// } while (i <= 10);

// for-of Loop
// let str = "ApnaCollege";
// let size = 0;
// for(let i of str) {
//     console.log("i = ", i);
//     size++;
// }
// console.log("size = ", size);

// for-in Loop
// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };
// for (let key in student) {
//     console.log("key =", key, "| value = ", student[key]);
// }

// Q. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
// let gameNum = 5;
// let userNum = prompt("Guess the game number: ");
// while (userNum != gameNum) {
//     userNum = prompt("You entered wrong number. Guess again: ");
// }
// console.log("congratulations, you entered the right number");

// String -
let str = "Hello World";
console.log("length - ", str.length);
console.log(str[0]);
console.log(str[1]);
console.log(str[7]);

// Template Literals 
let specialString = `This is Template Literals`
let obj = {
    item: "pen",
    price: 10
}
console.log(`the cost of ${obj.item} is ${obj.price}`);

console.log(str.toLowerCase());
console.log(str.toUpperCase());
let str2 = "     Hello   World   "
console.log(str2.trim());

console.log(str.slice(1, 7));

let str3 = "Hello JavaScript"
console.log(str.concat(str3));

let str4 = "Hellololo"
console.log(str4.replace('lo', 'p'));
console.log(str4.replaceAll('lo', 'p'));

console.log(str.charAt(3));


// Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
// eg: user name =“shradhakhapra”, username should be “@shradhakhapra13”
let fullName = prompt("enter your fullname without spaces");
let username = "@" + fullName + fullName.length;
console.log("username = ", username);
