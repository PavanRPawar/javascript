console.log("Lecture 8");

let btn = document.querySelector("#btn");
// btn.onclick = (e) => {
//     console.log('btn was clicked');
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// };

// Event Listeners
// node.addEventListener
btn.addEventListener("click", () => {
    console.log("button was clicked - handler1");
})
btn.addEventListener("click", () => {
    console.log("button was clicked - handler2");
})
let handler3 = () => {
    console.log("button was clicked - handler3");
}
btn.addEventListener("click", handler3)
btn.addEventListener("click", () => {
    console.log("button was clicked - handler4");
})
// node.removeEventListener
btn.removeEventListener("click", handler3)

// Q1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body")
let currMode = 'light';
modeBtn.addEventListener("click", () => {
    if (currMode === 'light') {
        currMode = 'dark'
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        currMode = 'light'
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currMode);
    
})