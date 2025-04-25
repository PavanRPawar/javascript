console.log("Lecture 7");

// getAttribute( attr )
let div = document.querySelector("div")
let id = div.getAttribute("id")
console.log(id);
let name = div.getAttribute("name")
console.log(name);

// setAttribute( attr, value )
let p = document.querySelector("p")
p.setAttribute("class", "paragraph")

// node.style
let box = document.querySelector("#box")
box.style.backgroundColor = "blue"

// Insert Elements
let newBtn = document.createElement("button")
newBtn.innerText = "Click me!"
// box.append(newBtn)
// box.prepend(newBtn)
// box.before(newBtn)
box.after(newBtn)
let newHeading = document.createElement("h2")
newHeading.innerHTML = "<i>Hello JavaScript!</i>"
document.querySelector("h1").append(newHeading)

// Delete Element
let para = document.querySelector("p")
para.remove()

// Q1. Create a new button element. Give it a text “click me”, background color of red & text color of white.
// Insert the button as the first element inside the body tag.
let newButton = document.createElement("button")
newButton.innerText = "Click me!"
newButton.style.backgroundColor = "red"
newButton.style.color = "white"
document.querySelector("body").prepend(newButton)

// Q2. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.
let paragraph = document.querySelector(".myClass")
paragraph.classList.add("newClass");