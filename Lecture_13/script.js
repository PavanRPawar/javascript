console.log("Lecture 13");

// Free APIs -
// https://free-apis.github.io/#/browse

const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact")
const btn = document.querySelector("#btn")

// let promise = await fetch(URL)
// console.log(promise);

// Async-await -
const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL)
    console.log(response);  // JSON format
    console.log(response.status);
    let data = await response.json()  // converted into readable
    console.log(data);
    factPara.innerText = data[0].text;
}
console.log(getFacts());

// Promise chaining -
// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) {
//             console.log(data);
//             factPara.innerText = data[2].text;
//         });
// }

btn.addEventListener("click", getFacts)