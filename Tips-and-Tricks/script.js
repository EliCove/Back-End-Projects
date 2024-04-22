//TODO: learn how to use better comments correctly

/* 
* * key:
* * n is used as a placeholder for a number, with numbered order if more different numbers need to be used
* * b is used as a placeholder for a boolean value, with numbered order if different boolean equations used
* * c is used as a placeholder to compare values
* * r is used as a placeholder for a random value, with numbered order if different random values used
* * i is used as a placeholder for an identifyer or name of functions and other declarations, with numbered order for more name placeholders
* * ^ ^ are used to specify what specific section of code in a body of code is being talked about
*/


//use to get a random number between 0 to 50 rounded down to the nearest whole number
//! Math.floor(Math.random() * 50);
//to get numbers between a certain range not from 0 use:
//! Math.floor(Math.random() * n + n1)
//n1 is the starting number and n is the distance from the starting number - 1

//rounds up to nearest whole number
//! Math.ceil(n)

//checks if number is an integer
//! Number.isInteger(n)


//to keep track of the data type of at least a variable use to operator:
//! typeof
//to check the value to the right of it, of which it will return or pass back a string.

//to create a line break use:
//! \n

//use to convert string to all lower case characters:
//.toLowerCase()


// * * conditional statements:

//to create an if statement use:
/* 
! if(b) {
!   "code to run if b is true"
! }
*/

//to create an if...else statement use:
/*
! if(b) {
!   "code to run if b is true"
! } else {
!   "code to run if b is false"
! }
*/

//to create an else if statement use:
/*
! if(b) {
!   "code to run if b is true"
! } else if(b2) {
!   "code to run if b2 is true"
! } else if(b3) {
!   "code to run if b3 is true"
! } else {
!   "code to run if all other boolean values false"
! }
*/

//you can do short-circuit evaluation by:
/*recognizing the fact that if you use truthy values and an || (or) operator the first condition 
will be check and if not true, the second or next one that is truthy will be set for the value; example: */
/*
! let username = '';
! let defaultName = username || 'Stranger';
*/
//?if string value is set for username then that will be set to defaultName, otherwise it will be false, so that 'Stranger' is used instead

//for short-hand syntax of the if...else statement use the ternary operator, example:
//! b ? "code to run if b is true" : "code to run if b is false";

//to create a switch statement use:
/*
! switch (c) {
!   case (r): 
? () not needed around each switch case r unless complicated
!       "code to run if r === c";
!       break;
!   case (r2):
!       "code to run if r2 === c"
!       break;
!   default:
!       "code to run if all cases don't euivilate to c"
!       break;   
! }
*/
//TODO: look into what not using break; in a switch statement could be used for

// * * conditional statements end.

// * * operators: 

//to compare two elements for equal value use:
//! === 
//indentity operator

// to compare to values for unequal values use: 
//! !== 
//identity operator

//called the modulo operator:
//! %

//the "and" operator is:
//! &&

//the "or" operator is: 
//! ||

//the "not" operator known as the bang operator:
//! !

// * * operators end

// * * these values (truthy and falsey values) can be used in place of truth or false values:
// truthy values are:
// any element that has a value that: 
// isn't falsey which is:
// 0, "", '', null, undefined, or NaN 
// ? " " and ' ' are truthy since they are not empty, they have a space

// * * functions:

//* defining functions:

//function declaration:
/* 
! function i() {
!   "code to run"
! };
*/
// ? This is not good practice: but there is a hoisting feature in JavaScript that allows you to call 
// ? or use functions before they are defined
//TODO: look into what hoisting is supposed to be used for, and in which cases it would be useful.

//function expression, where you declare a function inside an expression, by setting the function to 
//a variable with an identifier (it is common practice to create using const), 
//the function name is usually omitted (making the function an anonymous function), example:
/*
function expression:
! const i = function(i1) {
! "code to run"
!};

envoked function expression:
! i(r);
*/
// ? Function expressions can't use the hoisting feature

//arrow functions, or arrow function syntax is a shorter way to write functions using "fat arrow" notation, example:
/*
zero parameters:
! const i = ^() => {};^ //needs parenthesis

one parameter:
! const i = ^i1 => {};^ //fine withot parenthesis

multiple parameters:
! const i = ^(i1, i2) => {};^ //needs parenthesis

single-line block, the syntax used for this is known as concise body syntax (with one parameter), example:
! const i = i1 => i1 + r; //doesn't need return keyword or curly braces

multi-line block:
! const i = i1 => {\
!   "code to run"
!   return "code to run"; //needs return keyword and curly braces
! }
*/

//function parameters are placeholders for information that will be passed through a function when it is called, 
//(they are treated like variables within the function), example;
/*
function declaration:
! function i(^i1, i2, i3^) {
!   "code to run with i1, i2 and i3 being used"
! };

called function with n, n1, and n3 as arguments:
! i(n, n1, n2); //set the arguments to match the order the function parameters are declared
*/

//default parameters allow parameters to have a default value in case there is no argument passed into the function 
//or if the agrument is "undefined" when called, example:
/* 
function declaration:
! function i(^i1 = r^) {
!   "code to run with i1"    
! };

called function with an optional n argument:
! i(n); //custom function output
! ^i();^ //default function output
*/

//functions by default evaluate to value "undefined", to fix this and capture the resulting value of a function use 
//the "return" keyword in front of the value you are evaluating, example:
/*
function declaration":
! function i(i1) {
! "code to run with i1"
! ^return r;^ //this returns or (sets the value of the function) to the value of r you got from code above
! };

called function:
! console.log(i(n)); //prints r to the console
}
*/
//when using return in a function it stops all following code from being executed, like in a switch statement

//helper functions are functions that complete a specific task and then return that value inside another function. 
//Each function carrys out a specific task for easier readability and debugging. 
//Helper functions are functions declared inside of other functions. Example:
/*
function one:
! function i(i1) {
!   return "code to run with i1";
! };

function two:
! function i2(i3) {
i3 parameter is entered into the helper function i(), which will run with i3 value in the place of i1 parameter in i2, 
then return the value of i() into i2()'s additional code, which will be returned when declared outside of the function.
!   return i(i3) "addional code";  
! };

function declaration:
! const i4 = i2(r); //i2 value saved in the i4 variable for later use
*/
// ? parameter names can be used as much as neccissary, since they are individual to each function

// * * functions end

// * * defining scope:

//a block: the code found inside curly braces {}. They help group one or more statements together, and serve as an 
//  important structural marker for code.

//scope: the context in which variables are declared. Scope is related to blocks because varibles can exist either 
//  inside or outside of blocks.\

//global scope: variables declared outside of blocks. Global variables can be accessed by any code in the program, including blocks, 
//  because they are not bound inside a block.

//block scope: variables declared inside a block including function parameter variables, they are only accessable to lines of code 
//  inside the block. Variables declared with block scope are called local variables, because they are only availabe to that section 
//  of the program.

//global namespace: allows variable to be accessible from anywhere in the program. Always calling global variables can cause problems 
//  because the variables remain until the program finishes which means it fills the global namespace up quickly, taking up memory that 
//  could be used elsewhere.

//scope pollution: when there are too many global variables in the global namespace, or reused variables across different scopes. 
//  It makes if different to keep track of different variables, which sets up potential accidents. Example:
/* example from Codecademy:
! let num = 50;

! const logNum = () => {
!   num = 100; // Take note of this line of code; forgot to create a new num variable with let to be used locally.
!   console.log(num);
! };

! logNum(); // Prints 100
! console.log(num); // Prints 100; num was updated in the logNum() function, and since it was global it updated everywhere else as well
*/
// ? better practice not to define variables inside of global scope, because it's not easy to read the reassignment of the global 
// ?    variables inside and outside of blocks and could cause the program to do something unexpected.

//Good scoping practice: scoping variables as tightly as possible using block scope. Tightly scoping variables will:
// - will make code more legible because blocks are in discrete sections
// - make the code more understandible because it clarifies which variables are associated with different parts of the program.
// - makes it easier to maintain code, code will be modular: separating a program into different parts.
// - save memory in code because it cease to exist after block finishes running
// ? if a variable does not need to exist outside a block, it shouldn't! 
// ?    -this applies when using variables inside of blocks with other blocks in them as well!
// ? rename variables that could pollute the scope, global or block scopes!!!

//Scoping too tightly is also not good, duplicate code can indicate that a variable is scoped too tightly, 
//  when repetitve names inside multiple functions loosen the scope by using parameters and a global variable 
// instead of declaring the same variable multiple times.

// * * scope end

// * * JS console:

//I noticed that in order to create conditional statements like if statements in the console, they need to be done inside a function block, 
//  so that multiple lines can be used.

//set HTML code inside quotes equal to document.body.innerHTML to create HTML elements from inside the JavaScript console. 

//$() is recogized as an alias for the document.querySelector() to select an element; this shorthand resembles jQuery syntax
//$("body').style.color = 'blue; is an example of how to set CSS styles for HTML elements inside JavaScript console.

// * * JS console end

// * * Browser runtime environment:

//about:blank opens an blank webpage

//to use javascript code embedded inside an HTML file for the browser to run use <script> </script> tags

//window.alert() is a method built into the browser's runtime environment and any program executed into the browser has access to method.
//!<script> window.alert('Hello World'); </script> //will create a pop-up box with the text "Hello World" in the browser:
//  inside Test-Code/Browser-Runtime.

//the "window" object prvides access a huge amount of data and functionality relating to the open browser window beyond .alert(), 
//  other examples:
//  window.prompt() and window.confirm(): inside Test-Code/Browser-Runtime

//applications created for and executed in the browser are known as front-end applications, in order to create back-end applications that 
//  could run on a computer without a browser, other programming languages like Java or PHP are needed.

// * * Browser runtime environment end

// * * Node runtime environment:

//Node needs to be installed before used on your computer only use LTS versions to avoid errors from newer unstable updates, you need to 
//  check terminal command line for it using "node -v" to check current version and existence of node and "npm -v" to check current version 
//  and existence of the node package manager.

//Node created in 2009 allows programmers to create fulll-stack (front-end and back-end) applications using only the JavaScript language.
//Node is a completely different runtime environment, so browser-runtime environment data values and functions, like window.alert(), can't 
//  be used.
//Node gives back-end applications access to a variety of features unavailable in a browser, features availble:
//  server's file system, database, and network. Examples:

/*
You can check to see the directory a file is located in using the Node runtime environment variable "process":

! console.log(process.env.PWD); //my-app.js is the example file
*/

//you use console.log() instead of window.alert() because window isn't available

//process: an object containing data relating to the JavaScript file being executed.
//process.env: an object containing environment variables such as:
//  process.env.PWD which contains the current working directory.

//to execute (run) the code in a file, make sure Node is setup on your computer, then open terminal and run this command (example file):
/*
!    $ node my-app.js
!    /path/to/working/directory
*/
//The "node" command tells your computer to execute the my-app.js file in the Node environment

//The "node" command can also be used without a file argument to open the Node Read-Eval-Print-Loop (REPL), example
/*
!   $ node 
!   > process.env.HOME
!   '/home/ccuser'
*/
//TODO: learn more about Node Read-Eval-Print-Loop (REPL) and how it is used

// * * Node runtime environment end

//Front-End JavaScript applications are executed in a browser's runtime environment and have access to the "window" object.
//Back-End JavaScript applications are executed in the Node runtime environment and have access to the file system, databases, and networks
//  attached to the server.

// * * Arrays:

//One way to create arrays is an array literal:
//  An array literal creates an array wrapping an item in square brackets [], example:
/*
the array literal is set to the variable myInfo:
! const myInfo = ['my name is Marion', 21, true];
*/

//each element in an array has an index value starting with 0, to access individual elements use the array name an the index value inside
//  square brackets, bracket notation:
/*
! console.log(myInfo[0]); //prints "my name is Marion"
*/
//strings also have index values that you can access using bracket notation and an index value:
/*
! const name = 'Marion';
! console.log(name[0]); //prints 'M'
*/

//to change individual elements inside an array you can set the array name with bracket notation and the index value you want to change
//  equal to the value you want to change it to, example (using my first array above):
/*
! myInfo[1] = 22;
! console.log(myInfo); //prints [ 'my name is Marion', 22, true ]
*/

//differences between arrays declared with let and const:
//elements in an array declared with const are mutable, meaning you CAN change the contents of a const array, but you can NOT reassign a
//  new array or a different value (new total value, like array or other data type, like function or string), example (using my first 
//  array above):
/*
! myInfo[2] = false;
! console.log(myInfo); //prints [ 'my name is Marion', 21, false ]
*/
//elements in an array declared with let CAN change it's contents and CAN reassign a new array or a different value

//array's have the built in property "length" that you can use with dot notation to return the number of items inside an array, 
//  just like you can use it to figure out how many characters are in a string. 

//.push() method allows you to add items to the end of an array and returns the new array length, it is called like a function,
//  with items added as arguments ( arrayName.push(r) ), examples (using my first array above):
/*
! myInfo.push('loves learning', 'knows C#');
! console.log(myInfo); //prints [ 'my name is Marion', 21, true, 'loves learning', 'knows C#' ]
*/
//.push() changes or mutates the myInfo array. 
//  .push() is referred to as a destructive array method since it mutates the origional array

//.pop() method allows you to remove last item of an array, it doesn't take any arguments, and it returns the value of the last item.
//  The item returned can be set to a variable and used later. 
//  .pop() mutates the origin array, example (using my first array above):
/*
! const lastItem = myInfo.pop();
! console.log(myInfo); //prints [ 'my name is Marion', 21, true ]
! console.log(lastItem); //print "true"
*/

//there are non-mutating array methods for when you don't want to mutate the origional array

//.join() : combines array items and converts into a string, can take one argument of a string to separate items, can be used without 
//  an argument but won't have any seperator between combined array items in the string. Non-mutating!

//.slice() : return a partial copy of an array and can take two arguments, first argument the beginning index value and second argument
//  the index value following the the last wanted index value item; if one argument is used, if positive it selects the beginning index 
//  value and returns the following array items, if negative it selects starting from -1 index for the last list item index; if no 
//  arguments it makes a copy of the whole array. Non-mutating!

//.splice() : modifies an array by inserting, removing, and/ or replacing array elements, then returning an array of removed elements.
//  To remove array items use two arguments, first to select array index removal start and the total number of index items in sequence.
//  To insert items there are three or more arguments, first select the array starting index, second set 0 to keep item or use 1 or greater
//  numbers to replace, third or more are the list items to add. Mutating!

//.shift() : removes and returns the first element of an array, it also shifts down all subsequent elements down one place. Mutating!

//.unshift() : adds one or more elements to the begining of an array, returns the new array length, add elements as arguments. Mutating!
//  array

//.concat() : merges or concatenates two or more array and it doesn't change the existing array, but returns a new array. You put the 
//  first array name before .concat and then pass the second or more arrays as arguments. Non-mutating.

//.indexOf() : returns the first index value at which an element passed as an argument can be found, returns -1 if the value can't be found.
//  Non-mutating!

//there are many more array methods in JavaSript arrays documentation

//if you try to change an array in function, and the array is mutated in the function, when the function is called with the array
//  the array will be changed outside the function as well. This concept is called pass-by-reference, since what we are actually passing 
//  to the function is a reference to where the variable memory is stored and changing the memory.

//Nested array: when an array contains another array. To access nested array you can use bracket notation with the index value and to 
//  access elements within the nested array chaining or adding on more bracket notation with index values can be done, example:
/*
    const arrayNested = [[12, 4, 17], [13, 77]];
    console.log(arrayNested[0]); prints [ 12, 4, 17 ]
    console.log(arrayNested[1][0]); prints "13" //used a chain to add [0] to arrayNested[1]
*/

// * * Arrays end

//use shift + tab to shift code to the left

//use command ^>format document^ to use prettier on code to format code correctly