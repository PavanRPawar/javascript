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