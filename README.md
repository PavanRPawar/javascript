# JavaScript
## Notes

## let, const & var
### var: 
Variable can be re-declared & updated. A global scope variable.
### let:
Variable cannot be re-declared but can be updated. A block scope variable.
### const:
Variable cannot be re-declared or updated. A block scope variable.

## Data Types in JS
Number, String, Boolean, Undefined, Null, BigInt, Symbol
### Primitive Data Types - 7
### Non - Primitive Data Types - Object,

## Operators in JS
Used to perform some operation on data
### Arithmetic Operators
+, -, *, /
Modulus %
Exponentiation **
### Unary Operators
Increment
Decrement
### Assignment Operators
=, +=, -=, *=, %=, **=
### Comparison Operators
Equal to ==
Equal to & type ===
Not equal to !=
Not equal to & type !==
<, <=, >, >=
### Logical Operators
Logical AND &&
Logical OR ||
Logical NOT !

## Loops in JS
for Loop
while Loop
do-while Loop
for-of Loop - loop on string and array
for-in Loop - loop on object

## Template Literals in JS
A way to have embedded expressions in strings
### String Interpolation
To create strings by doing substitution of placeholders
`string text ${expression} string text`

## Arrays in JS
Collections of items
## Array Methods
### push()
add to end
### pop()
delete from end & return
### toString()
converts array to string
### concat()
joins multiple arrays & returns result
### unshift()
add to start
### shift()
delete from start & return
### slice()
returns a piece of the array
slice( startIdx, endIdx )
### splice()
change original array (add, remove, replace)
splice( startIdx, delCount, newEl1... )

## Functions in JS
Block of code that performs a specific task, can be invoked whenever needed

## forEach Loop in Arrays
arr.forEach( callBackFunction )
CallbackFunction : Here, it is a function to execute for each element in the array
*A callback is a function passed as an argument to another function.

### Higher-order functions
Higher-order functions in JavaScript are functions that can accept other functions as arguments or return functions as their results

## Map
Creates a new array with the results of some operation. The value its callback returns are used to form new array
arr.map( callbackFnx( value, index, array ) )

## Filter
Creates a new array of elements that give true for a condition/filter.
Eg: all even elements

## Reduce
Performs some operations & reduces the array to a single value. It returns that single value.

## Window Object
The window object represents an open window in a browser. It is browser’s object (not JavaScript’s) & is automatically created by browser.
It is a global object with lots of properties & methods.

## What is DOM?
When a web page is loaded, the browser creates a Document Object Model (DOM) of the page

## DOM Manipulation
### Selecting with id
document.getElementById(“myId”)
### Selecting with class
document.getElementsByClassName(“myClass”)
### Selecting with tag
document.getElementsByTagName(“p”)
### Query Selector
document.querySelector(“#myId / .myClass / tag”)          //returns first element
document.querySelectorAll(“#myId / .myClass / tag”)       //returns a NodeList
### Properties
tagName : returns tag for element nodes
innerText : returns the text content of the element and all its children
innerHTML : returns the plain text or HTML contents in the element
textContent : returns textual content even for hidden elements
### Attributes
getAttribute( attr ) //to get the attribute value
setAttribute( attr, value ) //to set the attribute value
### Style
node.style
### Insert Elements
let el = document.createElement(“div“)
node.append( el ) //adds at the end of node (inside)
node.prepend( el ) //adds at the start of node (inside)
node.before( el ) //adds before the node (outside)
node.after( el ) //adds after the node (outside)
### Delete Element
node.remove( ) //removes the node

## Events in JS
Events are fired to notify code of "interesting changes" that may affect code execution.
The change in the state of an object is known as an Event
- Mouse events (click, double click etc.)
- Keyboard events (keypress, keyup, keydown)
- Form events (submit etc.)
- Print event & many more

### Event Object
It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.

### Event Listeners
node.addEventListener( event, callback )
node.removeEventListener( event, callback )
*Note : the callback reference should be same to remove

## Classes & Objects
### Prototypes in JS
JS objects have a special property called prototype.
A javaScript object is an entity having state and behavior (properties and method).
We can set prototype using _ _ proto _ _
*If object & prototype have same method, object’s method will be used.

### Classes in JS
Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.

### Constructor( ) method is :
automatically invoked by new
initializes object

### Inheritance
inheritance is passing down properties & methods from parent class to child class.
*If Child & Parent have same method, child’s method will be used. [Method Overriding]

#### super Keyword
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

## async await >> promise chains >> callback hell
### Synchronous
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.
### Asynchronous
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

## Callbacks
A callback is a function passed as an argument to another function.

## Callback Hell
Callback Hell : Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
This style of programming becomes difficult to understand & manage.

## Promises
Promise is for “eventual” completion of task. It is an object in JS.
It is a solution to callback hell.
*resolve & reject are callbacks provided by JS
A JavaScript Promise object can be:
- Pending : the result is undefined
- Resolved : the result is a value (fulfilled)    resolve( result )
- Rejected : the result is an error object        reject( error )
*Promise has state (pending, fulfilled) & some result (result for resolve & error for reject).
.then( ) & .catch( )
promise.then( ( res ) => { .... } )
promise.catch( ( err ) ) => { .... } )

## Async-Await
async function always returns a promise.
    async function myFunc( ) { .... }
await pauses the execution of its surrounding async function until the promise is settled.

## IIFE : Immediately Invoked Function Expression
IIFE is a function that is called immediately as soon as it is defined.

## fetch API
The Fetch API provides an interface for fetching (sending/receiving) resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource (data).
let promise = fetch(url, [options])