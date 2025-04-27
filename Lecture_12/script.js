console.log("Lecture 12");

// Asynchronous -
// console.log("one");
// setTimeout(() => {
//     console.log("hello");
// }, 2000);
// console.log("two");


// Callbacks -
// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b)
// }
// calculator(1, 2, sum)


// Callback Hell -
// function getData(dataId, getNextData) {  // 2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData()
//         }
//     }, 2000)
// }
// getData(1, () => {  // callback hell
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     })
// })


// Promises -
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve('success')
//     // reject('some error')
// })

// function getData(dataId, getNextData) {  // return promise
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             // reject("error")
//             if (getNextData) {
//                 getNextData()
//             }
//         }, 5000)
//     })
// }
// let finalVal = getData(123)

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success")
//         // reject("error")
//     })
// }
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// })
// promise.catch((err) => {
//     console.log("promise rejected", err);
// })

// Promise Chaining -
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success")
//         }, 4000);
//     })
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success")
//         }, 4000);
//     })
// }
// console.log("fetching data1...");
// let p1 = asyncFunc1()
// p1.then((res) => {
//     console.log(res);
// })
// console.log("fetching data2...");
// let p2 = asyncFunc2()
// p2.then((res) => {
//     console.log(res);
// })
// console.log("fetching data1...");
// asyncFunc1().then((res) => {    // promise chaining
//     console.log("fetching data2...");
//     asyncFunc2().then((res) => {})
// })

// Solve callback hell using promise chain
// function getData(dataId, getNextData) { 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     })
// })
// another way to write i.e. Proper Promise chaining
// getData(1).then((res) => {
//     return getData(2)
// }).then((res) => {
//     console.log(res);
    
// })

// Async-Await -
// async function hello() {
//     console.log("hello");
// }
// console.log(hello());
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000);
//     })
// }
// async function getWeatherData() {
//     await api();  // 1st call
//     await api();  // 2nd call
// }
// console.log(getWeatherData());

// Solve promise chain using async await
function getData(dataId, getNextData) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 3000)
    })
}
async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("complete");
}
console.log(getAllData());


// IIFE : Immediately Invoked Function Expression -
// (async function () {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("complete");
// })()