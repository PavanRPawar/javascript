console.log("Lecture 4");

// let marks = [97, 85, 63, 45]
// console.log(marks);
// console.log("length - ", marks.length);
// console.log(typeof(marks));
// console.log(marks[0]);
// console.log(marks[3]);
// console.log(marks[6]);

// Looping over an Array
let names = ['Pavan', 'Bhavesh', 'Nilesh', 'Yash', 'Sameer']
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);   
// }

// for of
// for (const name of names) {
//     console.log(name);
// }

// Q1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (const mark of marks) {
//     sum += mark;
// }
// let avg = sum / marks.length;
// console.log(`average marks - ${avg}`);

// Q2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (const item of items) {
//     console.log(`value at index ${i} = ${item}`);
//     let offer = item / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }
// console.log("new array after offer - ", items);

// Array Methods
let foodItems = ["potato", "apple", "litchi", "tomato"]

// push()
foodItems.push("chips")
console.log(foodItems);
foodItems.push("burger", "paneer")
console.log(foodItems);

// pop()
let deletedItem = foodItems.pop()
console.log("deletedItem - ", deletedItem);
console.log(foodItems);

// toString()
console.log(foodItems.toString());

// concat()
let marvelHeroes = ["thor", "spiderman", "ironman"]; 1
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"]
let heroes = marvelHeroes.concat(dcHeroes, indianHeroes)
console.log(heroes);
console.log(marvelHeroes);
console.log(dcHeroes);
console.log(indianHeroes);

// unshift()
marvelHeroes.unshift("antman")
console.log(marvelHeroes);

// shift()
let deletedHero = dcHeroes.shift()
console.log("deletedHero - ", deletedHero);
console.log(dcHeroes);

// slice()
console.log(marvelHeroes.slice(1, 3));

// splice()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.splice(2, 4, 1, 1, 1)
console.log(arr);
// add element
// arr.splice(3, 0, 888)
// console.log(arr);
// delete element
// arr.splice(2, 1)
// console.log(arr);
// replace element
// arr.splice(1, 1, 99)
// console.log(arr);
// arr.splice(6)
// console.log(arr);

// Q. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// a. Remove the first company from the array
companies.shift()
console.log(companies);
// b. Remove Uber & Add Ola in its place
companies.splice(2, 1, "Ola")
console.log(companies);
// c. Add Amazon at the end
companies.push("Amazon")
console.log(companies);
