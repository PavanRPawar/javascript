console.log("Lecture 6");

// console.log(window);
window.console.log("Hello World")

console.log(window.document);   // print
console.dir(window.document);   // print properties and methods

// console.log(document);
console.log(document.body);

// Selecting with id
let heading = document.getElementById("heading")
console.log(heading);

// Selecting with class
let paras = document.getElementsByClassName("para");
console.log(paras);

// Selecting with tag
let parasByTags = document.getElementsByTagName("p")
console.log(parasByTags);

// Query Selector
let firstElement = document.querySelector("p")   // 1st element
console.log(firstElement);
let allElements = document.querySelectorAll("p")   // all elements
console.log(allElements);
let byClass = document.querySelector(".para")
let byId = document.querySelector("#heading")

// Properties
// tagName
console.log(firstElement.tagName);
// innerText
let fruitsContainer = document.querySelector(".fruitsContainer")
console.log(fruitsContainer.innerText);
// innerHTML
console.log(fruitsContainer.innerHTML);
// fruitsContainer.innerText = "ABCD"
// textContent
let hiddenHeading = document.querySelector("h5")
console.log(hiddenHeading);
console.log(hiddenHeading.innerText);
console.log(hiddenHeading.textContent);

// Q1. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.
let h2 = document.querySelector("h2")
h2.innerText = h2.innerText + " Hello World"

// Q2. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box")
// divs[0].innerText = "new unique value 1"
// divs[1].innerText = "new unique value 2"
// divs[2].innerText = "new unique value 3"
let index = 1;
for (const div of divs) {
    div.innerText = `new unique value ${index}`
    index++;
}