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

//the "window" object provides access a huge amount of data and functionality relating to the open browser window beyond .alert(), 
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
// ? to select a random element from an array use the Math.floor(Math.random() * array.length) inside bracket notation, 
// ?    example from Codecademy:
/*
? const cards = ['diamond', 'spade', 'heart', 'club'];
? const currentCard = cards[Math.floor(Math.random * cards.length)]; //returns one of the four values
*/

// * * Arrays end

// * * Loops:

//for loop:
//the typical "for" loop includes an iterator (repeater) variable that appears in all three expressions of the for loop. The iterator 
//  variable is initialized, checked against the stopping condition, and assigned an new value on each loop iteration.
//  It is best practice to use a descriptive iterator variable name.
//The "for" loop contains three expressions separated by ";" inside parenthesis:
//  1. an initialization stars the loop and can be used to declare the iterator variable
//  2. a stopping condition is the condition that the iterator variable is evaluted against; "true" run, "false" stop
//  3. an iteration statement is used to update the iterator on each loop
//Example:
/*
! for (let counter = 0; counter < 4; counter++) {
!   console.log(counter); //prints 0 (new line) 1 (new line) 2 (new line) 3
! }
*/

//looping in reverse:
//To run a backward for loop: set the iterator to the highest desired value in the iterated expression, set the stopping condition for when
//  the iterator value is less than the desired amount, and the iterator should decrease in intervals after each interation; Example:
/*
! for (let counter = 3; counter >= 0; counter--) {
!   console.log(counter); //prints 3 (new line) 2 (new line) 1 (new line) 0
! }
*/

//looping through arrays:
//To loop through each element in an array a for loop should use the array's ".length" property in it's condition (second expression), and
//  the iterator variable set into the bracket notation of the array "array[i]". For arrays you can use "i" for the iterator variable name,
//  because i is though of as the short-hand for the word "index". 
//Remember that array's are zero index, so the index of the last element in an array is equivalent to array.length - 1.
//Example:
/*
! const colors = ['blue', 'orange', 'purple', 'green']
! for (let i = 0; i < colors.length; i++) {
!   console.log('Today\'s favorite color is: ' + colors[i]); //prints "Today's favorite color is: blue" (new line) "Today's favorite ..."
! }
*/

//nested loops: when there is a loop running inside of another loop. For each round of the outer loop, the inner loop will run completely.

//while loop:
//continues looping until a the condition is false, it is used when the number of times the loop needs to iterate is unknown.
//to turn a while loop into a for loop use create the iteration variable outside of the while loop, the stopping condition is in 
//  parenthesis after the "while" keyword, the incrementation will happen inside the while loop ususally at the end of loop block.
//  Example:
/*
! let iteratorNum = 0;
! while (iteratorNum < 6) {     //prints 0 (new line) 1 (new line) 2 (new line) 3 (new line) 4 (new line) 5
!   console.log(iteratorNum);   
!   iteratorNum++;
! }
*/
// Example 2 not written like a for loop (source Codecademy):
/*
! const card = ['diamond', 'spade', 'heart', 'club'];
! let currentCard;
! while (currentCard !== 'spade') {
!   currentCard = card[Math.floor(Math.random() * 4)];
!   console.log(currentCard); //prints a card value each one on a new line in the console until it ends in the value "spade"
! }
*/

//do...while loop: 
// works the same as while, except it will always run at least once and will run again if the condition is true, and if it equivalates
//   to false the loop will stop. The condition is at the end of loop instead of beginning. Example:
/*
! do {
!    //code to run
! } while (condition);
*/

//break keyword:
//  you can use the break keyword to stop a loop from continuing to execute even thought the orginonal stopping condition hasn't been met.
//  "break" allows you to break out of the loop from within the loop block. Example (using Example 2 array above):
/*
! for (let i = 0, i < card.length, i++) {  //iterates through array (to print elements) to end, unless there is a value of 'spade', then
!   console.log(card[i]);                  //    it breaks free from the loop.          
!   if (card[i] === 'spade') {
!      break;
!   };
! }
*/

//"for...of" loop, "for" loop replacement for iterating through arrays, strings, and array-like objects, example:
/*
! const items = 'pen', 'marker', 'pencil', 'highlighter';
! for (const item of items) {   //item is a temperary iterator variable, can be named anything; usually relating to array name
!    console.log(`I use ${item}.`);   //print each item in items on their own line in console
! }
*/
//can declare with let, const, or var.
//  Sometimes it is necissary to use the "break" keyword to end the loop when a specific condition is met.
//You can also use the "continue" keyword to skip one iteration of the loop, example from items array above:
/*
! for(const item of items) {
!   if (item === 'marker') {
!       continue;               // skips the iteration where item equals 'marker', so that array item won't be printed to the console
!   }
!   console.log('I use ${item}.`);
! }
*/
// ? you can NOT use a "for...of" loop to iterated backwards through an array, so use a regular for loop for that

// ? there are other "for..." type loops in JavaScript that are used for different purposes, like "for...in", so use them depending on 
// ?    the situation.

// * * Loops end

// * * Objects:
//TODO: fill in later    
// * * Objects end

// * * Higher-order functions
//TODO: fill in later
// * * Higher-order functions end

// * * Built in iterator methods (iterators):
//TODO: fill in later
// * * Built in iterator methods end

// * * JavaScript and the DOM:

//<script> element: allows you to add JS code inside an HTML file,  or if you use the:
//src attribute set to a JS file, you can link that JS code to the HTML file.

//defer attribute: loads the script, but ensures that that the whole HTML file has been parsed before before the script is executed.
//async attribute: loads the script in the background and when it will execute immediately after it has been downloaded.

//DOM (Document Object Model): it is a model of objects in a document, it is a powerful tree-like structure that allows programmers to
//  conceptualize hierarchy and access the elements on a web page. It can also be explained as a logical tree-like Moedl that that 
//  organizes a web page's HTML Document as an Object. This meaning because in JS the document is accessed an object.
//  It's implemented to browsers to allow JS to access, modify, and update the structure of an HTML webpage in an organized way.

//node: a family member in computer science, it is defined as an interscting point in a tree that contains data. 
//  In the DOM tree the top-most node is called the Root Node, which represents the HTML document, the decendents start eith the <html>
//  tags followed by the <head> tage, <body> tag, etc.
//parent node: any node that is a direct ancestor to another node
//child node: is a direct descendent of another node, called the parent node
//  there are multiple types of node objects in the DOM tree: element nodes, text nodes, etc.

//The DOM allows you to access a node's attributes.

//! document
//document object: ia the door the the DOM structure, it allows access to the root node of the DOM tree; it allows scripts to access 
//  children of the DOM as properties. Use dot notation and element name or preperty like you would acess any other object in JS.

//When accessing an HTML element using the DOM in your script, you also have access to all of that elements properties. Including:
//  the ability to modify the contents, attributes, and properties of an element.
//! .innerHTML
// the .innerHTML property allows ability to access and set the contents of an element. Examples:
/*
! document.body.innerHTML = 'My pets get along most of the time.'; //completely replaces body with this text

! document.body.innerHTML = '<h2>This will be the last time, subheading</h2>'; //completely replaces body with h2 element with this text
*/

//! .querySelector()
//the .querySelector() method takes in the argument of a selector as a string and and returns the first element that matches that selector.

//JS has more targeted methods than the select elements based on their class, id, or tag name.

//! .getElementByID()
//is used to select ID by entering the ID name value inside quotes as the method's argument

//! .getElementsByClassName()
//is used to select specific class elements in the document by setting the array value index for selected element in the document, example:
/*
! document.getElementsByClassName('i')[n].innerHTML = 'value to insert into element';
! document.getElementsByClassName('i')[n].style.fontFamily = 'Roboto';
*/

//! .getElementsByTagName()
//is used to select element by their tag name by ???
//can be used to set the innerHTML by setting the array value index of the specific tag in the document, example:
/*
! document.getElementsByTagName('i')[n].innerHTML = 'value to insert into element';
*/

//! .style
//is a property that is used to style using JS, to style an element you have to use element.style.property format, where property is a
//  css property name that can be set to a styling value, example:
/*
! document.querySelector('body').style.backgroundColor = 'blue'; //makes the whole background blue
*/
//uses style properties using camelCase instead of hyphens, example:
//! backgroundColor instead of background-color

//! .parentNode 
//the .parentNode property returns the parent of a specific element in the DOM hierarchy. The document element is the root node so it's
//  .parentNode property will return "null"

//! .children
//the .children property returns an array of the specified element's children. If it does not have any children, it will return "null"
//if you select an individual child element, you can change it's innerHTML and it's styling: since it is set to the value of a specific
//  element.

//! .createElement()
//the .createElement() method creates a new element base of the tag name passed into it as an argument, but it doesn't append it to the 
//  document, it creates an empty element with no inner HTML.
//values can be assigned to properties of newly created element, examples:
/*
! let myInfo = document.createElement('p');
! myInfo.id = 'my-name';
! myInfo.innerHTML = 'Marion Covington | marioncovington@hotmail.com | EliCove Projects';
*/

//! .appendChild()
//the .appendChild() method is used add a child element as the parent element's last child node, example:
/*
! document.querySelector('footer').appendChild(myInfo); //adds myInfo as the last child of the footer element
*/

//! .removeChild()
//the .removeChild() method removes a specified child of a parent, example:
/*
! let headerTwo = document.querySelector('h2');
! document.body.removeChild(headerTwo);
*/

//! .hidden
//the .hidden property allows you to hide a tag by setting it to "true" of "false", it doesn't remove the element from the DOM but hides it
//  example:
/*
! document.getElementsByClassName('disappear')[0].hidden = true; //hides the first element with the class of disappear.
*/

//! .onclick
//the .onclick property allows you to assign a function to run on when a click a click event happens on an element.
//  you can also assign the .onclick property to a function by name, example:
/*
! let listItemSix = document.getElementByTagName('li')[5];
! listItemSix.onclick = function() {
!   listItemSix.hidden = true;
! };                                            //makes list item 6 disappear when clicked on



! let dropDownThree = document.getElementsByClassName('dropDown')[2];

! const moreInformation = () => {
!   let newListItem = document.createElement('li');
!   newListItem.innerHTML = 'Dogs are really smart, once they come to know how something works to their benefit, they change their 
! behavior.';
!   dropDownThree.parentNode.appendChild(newListItem);
! }

! dropDownThree.onclick = moreInformation; // creates an new element after dropDownThree, with added information, that appears on a click
*/
//? how often and when do you use the document declaration?
//? whenever you need to set or access something, starting from the document itself, probably

// * * JavaScript and the DOM end

// * * DOM events with JavaScript:

//! .addEventListener()
//the .addEventListener() method can have a DOM element listen for a specific event and execute a block of code when the event is detected
//  The DOM element that listens for an event is called the "event target" and the block of code that runs when the event happens is called
//  the "event handler". Example:
/*
! let eventTarget = document.querySelector('aside');

! eventTarget.addEventListener('click', () => {
!   //this is event handler code:
!   eventTarget.style.backgroundColor = violet; // does the same thing as the onclick property except the function and the event are  
!   eventTarget.style.color = beige;            //   arguments, instead of having the event inself set equal to the function.
*/
// it is best practice to create a named event handler function, to keep your code organized and reusable, even if your code gets complex.
// so best practice for the code above the code for the .addEventListener() method, would be and change like this:
/*
! function eventHandlerFunction() {
! eventTarget.style.backgroundcolor = violet;
! eventTarget.style.color = beige;
! }

! eventTarget.addEventListener('click', eventHandlerFunction);
*/
//the .addEventListener() method can add multiple function handler functions, unlike the .onevent syntax that is set to only one function

//* .onevent property syntax
//event handlers can also be set using an .onevent property on a DOM element (event target). 
//The pattern for registering a specific event is to append an element with ".on" followed by the lowercased event type name, like 
//  document.getElementById('myElement').onclick = function() {/*event handler code*/}; which used the click event by using .on plus click.

//! .removeEventListener()
//the .removeEventListener() method is used to reverse the .addEventListener() method by stopping the event target from 'listening' for an
//  event to fire when it no longer needs to. It takes two arguments, the event type as a string and the event handler function. Example:
/*
! eventTarget.removeEventListener('click', eventHandlerFunction);
*/
//the the event type name and the name of event handler to remove must both be there because there might be many event handler functions 
//  associated with a particular event.
//If .addEventListener() was provided an anonymous function, then the event listener can't be removed.
//?You can set an .removeEventListener() inside of the eventHandlerFunction that is being called with the .addEventListener,
//? to make it run the function only once, in other words close the listener once it runs through it.
//Example:
/*
! function eventHandlerFunction(){
!   //code to change the DOM
!   eventTarget.removeEventListener('event', eventHandlerFunction);
! }

! eventTarget.addEventListener('click', eventHandlerFunction);
*/

//event objects properties:
//you can access object properites using the .addEventListener() method and setting an argument for the function that will take in the 
//  event object, which you can then use the event object properties on. Example:
/*
! function eventHandlerFunction(event) {
!   console.log(event.timeStamp);
! }

! eventTarget.addEventListener('click', eventHandlerFunction); //the click event is taken in as the event argument in the eventHandlerFunction()
*/

//*call these propeties to see information about the event:
//! .target
//the .target property is used to reference the element that the event is registered to, example:
/*
! function eventHandlerFunction(event) {
!   event.target.innerHTML = 'I am the element that event was set on!'; //sets the innerHTML of the element the event is set to 
! }

! idElementInfo.addEventListener('click', eventHandlerFunction); //sets the innerHTML of idElementInfo to the string in the eventHandlerFunction
*/

//! .type
//the .type property is used to access the name of the event, example (using and changing the function from .target propety example):
/* inside eventHandlerFunction():
! console.log(event.type); //would print 'click' to the console once click event is triggered
*/

//! .timeStamp
//the .timeStamp property is used to access the number of milliseconds that passed since the document loaded and the event was triggered
//  Example (using and changing the function from .target propety example):
/* inside eventHandlerFunction():
! console.log(event.timeStamp); //prints how log it takes for event to be triggered once the document is loaded
*/

// * * DOM events with JavaScript end


//use shift + tab to shift code to the left

//use command ^>format document^ to use prettier on code to format code correctly