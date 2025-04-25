console.log("Lecture 5");

// function myFunction() {
//     console.log("Hello JavaScript");
// }
// myFunction();

// function myFunction1(msg, n) {  // parameter
//     console.log(msg, n);
// }
// myFunction1("Hello World", 10)   // argument

// sum of 2 numbers
// function sum(a, b) {
//     // console.log("sum = ", a + b);
//     s = a + b;
//     return s;
// }
// let val = sum(11, 2)
// console.log(val);

// Arrow function
// const mul = (x, y) => {
//     console.log("mul = ", x * y);
// }
// mul(5, 6);
// console.log(mul);

// Q1. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" ||
//       char === "A" ||
//       char === "E" ||
//       char === "I" ||
//       char === "O" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log("vowels count = ", count);
// }
// countVowels("Hello");

// Q2. Create an arrow function to perform the same task.
// const vowelsCount = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" ||
//       char === "A" ||
//       char === "E" ||
//       char === "I" ||
//       char === "O" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log("vowels count = ", count);
// };
// vowelsCount("Pavan Pawar")

// forEach Loop in Arrays
// let arr = [1, 2, 3, 4, 5, 6]
// arr.forEach(function printVal(val) {   // value at each index
//   console.log(val);
// })
// let arr2 = ['pune', 'mumbai', 'delhi']
// arr2.forEach((value, index, array) => {
//   console.log(value.toUpperCase(), index, array);
// })

// Q1. For a given array of numbers, print the square of each value using the forEach loop.
// let arr = [1, 2, 3, 4, 5, 6]
// let calcSquare = (val) => {
//   val = val ** 2;
//   console.log(val);
// }
// arr.forEach(calcSquare)

// Map
let arr = [1, 2, 3, 4, 5, 6]
let newArr = arr.map((val) => {
  return val * 2
})
console.log(newArr);

// Filter
let arr2 = [1, 2, 3, 4, 5, 6]
let newArr2 = arr2.filter((val) => {
  return val % 2 == 0
})
console.log(newArr2);

// Reduce
// let arr3 = [1, 2, 3, 4, 5, 6]
// let singleValue = arr3.reduce((result, currVal) => {
//   return result + currVal;
// })
// console.log(singleValue);
// largest element
let arr4 = [5, 9, 3, 7, 4]
let largerNum = arr4.reduce((result, currVal) => {
  return result > currVal ? result : currVal;
})
console.log(largerNum);

// Q1. We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks = [56, 81, 95, 63, 99, 91]
let toppers = marks.filter((mark) => {
  return mark > 90;
})
console.log(toppers);

// Q2. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate product of all numbers in the array.
// Use the reduce method to calculate sum of all numbers in the array.
let num = prompt("enter a number")
let numArr = []
for (let i = 1; i <= num; i++) {
  numArr[i - 1] = i;
}
console.log(numArr);
let sum = numArr.reduce((res, cur) => {
  return res + cur;
})
console.log("sum of arr = ", sum);
let mul = numArr.reduce((res, cur) => {
  return res * cur;
})
console.log("mul of arr = ", mul);
