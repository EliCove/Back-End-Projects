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
//! .toLowerCase()

//use to create a copy of a string that is converted into an array of character or other strings
//! .split('');
//! .split(' ');  //splits the string at all spaces


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

//* Events:

//*mouse events:
//! click
//this event is fired when the mouse button is clicked down and then released

//! wheel
//the wheel event fires when you rotate the mouse wheel, or use the mousepad to scroll down.

//! mousedown
//this event is fired while the mouse button is pressed down, it doesn't need the mouse button to be released to fire

//! mouseup
//this event is fired while the mouse button is released, it doesn't depend on the mouse button being pressed to fire

//! mouseover
//this event is fired when the mouse enters the content of and element

//! mouseout
//this event is fired when the mouse leaves an element

//*keyboard events:
//an event handler function can be programmed to react to specific key, or react to any interaction to the keyboard:
//! keydown
//this event is fired while a key is pressed down

//! keyup
//this event is fired while a key is released

//! keypress
//this event is fired when a key is pressed down and released

//keyboard events have unique properties assigned to their event objects
//! .key
//the .key property stores the values of the key pressed by the user


// * * DOM events with JavaScript end

// * * Introduction to Form Validation

//Regular expression are sequences of characters define patterns to look for in text, they are important tool used in validating input
//  they are used with the "pattern" attribute:
//! [^]* 
// [^]* is used after a pattern to match all expressions with that pattern
//! [^]*\d{3}[^]*\{3}-\d{4}
// [^]*\d{3}[^]*\{3}-\d{4} is used to match all expressions that contain valid cell phone numbers, or numbers and symbols only

//client-side validation: a technique used to validate form data to prevent problematic inputs from being submitted in the first place
//the client interacts with the server in behalf of the user, in websites, the web browser is the client
//the logic for validating the form is included with the code that displays the code on the users device
//no interaction with the backend is required to perform client-side validations
//modern HTML provides some of these validation features built-in, examples
/* 
! //HTML can be used to make some parts of the form "required" and others optional
! //HTML can be used to create set minimum and maximum values for an input, and minimum and maximum lengths for text input
! //can be used to make sure that the input matches a specific pattern, specified by a regular expression
*/
//if any of the rules HTML validation rules aren't followed the user won't be able to submit their form, and they will receive an error
//  message stating why
//this lessens the likelyhood of the back-end recieving incorrect data and provides users with immediate feedback:
//  the user is alerted immediately to the issues in how they filled out the form, instead of waiting for the server to say there are issues
//  and having to fill out the whole form again.
//catching these issues early saves the application time and resources

//! required
//to set form input validation requirements, use the "required" attribute followed by the set validation feature attribute requirement(s)
//! minlength
//! maxlength
//minlength and maxlength attributes are used to set the minimum and maximum ammount of characters a field is allowed as input, example;
//! min
//! max
//min and max attributes are used to the the minimum and maximum number accepted as an input, example;
/*
! <input id="siblings" name="siblings" type="number" required min="0" max="30">
! //    this is used to set a requirement of it having a number input from 0 to 30
*/
//! pattern
//the pattern attribute is used to set the required patterns for a specific input, examples;
/*
! <input id="name" name="name" type="text" required pattern="[mM]arion" minlength="3" maxlength="20"> 
! //    this is used to set a requirement of it having upper or lowercase first of the name Marion and at least 3 charaters and 20 or
! //    less characters
*/

//Javascript form validations handle issues that can't be handled by built-in HTML validations; this code can be written, or incorperated
//  from a JavaScript library.
// If there are unique requirements, these *systems of validation* will have to be added myself

//for mostly simple websites the form validation can be written or used from a simple vanilla library like just-validate, but most 
//  basic validaton libraries involve directly accessing and manipulating the DOM. This can get tricky when working with a framework that
//  relies on virtual DOM like React or Vue.
//  In those situations it is probably best to incorporate a library that works best well with the specific framework, like the
//  formik library which is a lightweight library that simplifies validating forms in a React app. 

//back-end validation
//validations must also be completed on the back-end or server-side because front-end validations easy to by-pass, like simply turning off the
//  JS on their browser, and there are also middleman attacks, where data is changed after a the request is submitted by the user, but
//  before it arrives to the server.
//? the backend must never trust the data it receives
//once the data is in the back-end, there is complete control over it.
//Several advantages of back-end validation:
/*
! enables the use of validation code on machines that usually have more computing power
! allows validation code to be written that a user can't see, if malicious users can't see how the data is validated, it's much harder to 
!   find ways around it
! the information can be validated against other data that the front end doesn't have access to, for example: checking the database if a 
!   username is already in use
*/
//there are two ways to validate inputs on the server-side:
//! taking place while the user is still inputting data into the form on the front end, making asynchronous requests to the server with 
//!   peices of their data and send feedback to the user before they've submitted
//  this is slower than front-end validation and can be a design challenge from the user experience perspective
/*
! takes place once the form is submitted, back-end validation is our applications last defence against problematic data, and it's 
!   essential to verify the validity and safelty of the data before adding it to the database. 

! This is an opportunity to "sanitize" the data: to ensure our database is useful, it's important that all data within it is formatted
!   consistently. **!!** While we might be flexible about the formatting we require from the user, inputs need to be transformed into 
!   a strict format before entering them into the database.
*/

// * * Introduction to Form Validation end

// * * HTML Forms

//! <form>
//the <form> element is used for collecting information, it has a closing </form> element that encloses that data it will be collecting.
//it needs the location where the information should be sent and what HTTP request to make, example:
/*
! <form action="example.html" method="POST"> 
! //form elements
! </form>
*/
//they can contain child elements like <h1> to label the form and <p> to give more details about what the form and form and its other 
//  elements are used for

//! action
//the action attribute determines where the information will be sent
//! method
//the method attribute is assigned the HTTP verb that is included in the HTTP request,
//?these verbs don't need capitalized, but it is ususally done that way, like "POST"

//! <input>
//the <input> element is used to create an input field, it has a "type" attribute that determines how it renders on the webpage and what
//  kind of data it can accept, and the "name" attribute that makes it possible for the info inside <input> to be sent when the form is 
//  submitted.

//! type
//the type attribute has many values it can accept, one is the value "text":
//! "text"
//the "text" value renders a text field users can type into, when inside an <input> and set to the type attribute.
/*
! <input type="text">
*/

//! name
//the name attribute labels what the input is used for 
//! value
//the value attribute value is assigned anything the user types into the text field, but can have a default value in text field when set 
//  to the value attribute manually. Example with all previous HTML form code:
/*
! <form action="/practice.html" method="POST">
!   <input type="text" name="practice-text-box" value="practice value"
! </form>
*/

//the "name" attibute value is paired with the "value" attribute and is sent as text when the form is submitted, 
//  for example using code above:
/*
! "practice-text-box=practice value" //if user didn't change the value in the text box, this text would be sent to /practice.html
!                                    //  because the value of the name attribute "practice-text-box" and the value of the value attribute
!                                    //  is "practice value"
*/

//! <label>
//the <label> element has an opening and closing tag and displays text written between them, to associtate the <label> element and the
//  <input> element, the <input> element needs an "id" attribute with the same name value as the <label> elements "for" attribute, 
//  example:
/*
! <form action="/practice.html" method="POST">
!   <label for="first-name">Enter first name:</label>
!   <input type="text" name="user-first-name" value="Billy" id="first-name">
! </form>
*/
//another benefit of using the <label> element is that when it is clicked the corresponding input is highlighted/selected

//! type="password"
//the type="password" attribute and value pair is used for <input> and will replace the input text with another character like an
//  asterick (*) or a dot(•), even though the password field text is obscured, the value of the text is sent when the form is submitted
//example:
/*
! <form action="/practice.html" method="POST">
!   <label for="user-password">Password: </label>
!   <input type="password" id="user-password" name="user-password"> //if "mylove21" is typed into the password field, then 
!                                                                   //  "user-password=mylove21" will be sent with other info in the form
! </form>
*/

//! type="number"
//the type="number" attribute value pair is used for <input> to take in number input values, it restricts what users type into the input field to 
//  just numbers and a few characters like "-", "+", and ".".
//there can be a "step" attribute used with it, that create arrows inside the input field to increase and decrease the value by the value
//  of the "step" attribute
//Example:
/*
! <form action="/practice.html" method="POST">
!   <label for="age">Age: </label>
!   <input type="number" step="1" id="age" name="age"> //this creates an number input with arrows that change that number up or down by
!                                                      //   one.
! </form>
*/

//! type="range"
//the type="range" attribute value pair is used for <input> to create a slider, to set the minimum and maximum value for the slider, values
//  need to be set to the "min" and "max" attributes of <input>. To control how smooth and fluid the slider works the "step" attribute can
//  be assigned a step value. -The smaller the step value the smoother the slider moves, the larger the step value the more noticable the 
//  move. Example:
/*
! <form action="/practice.html" method="POST">
!   <label for"brightness">Brightness Level</label>
!   <input type="range" min="0" max="100" step="5" id="brightness" name="brightness"> //creates a slider that goes from 0 to 100 and 
!                                                                                     //  changes by a step of 5 
! </form>
*/

//! type="checkbox"
//the type="checkbox" attribute value pair is used for <input> to an individual checkbox to select an item. Each checkbox needs to be 
//  created with a new <label> and <input> element pair, example:
/*
! <form action="/practice.html" method="POST">
!   <p>Medical issues</p>

!   <input type="checkbox" id="heartburn name="symptom" value="hearburn"> //first checkbox
!   <label for="heartburn"Heartburn</label>

!   <input type="checkbox" id="rash" name="symptom" value="rash"> //second checkbox
!   <label for="rash">Rash</label>

!   <input type="checkbox" id="diarrhea" name="symptom" value="diarrhea"> //third checkbox
!   <label for="diarrhea">Diarrhea</label>

! </form>
*/
//there are assigned values to the "value" attribute of checkboxes, but these values are not visible, so <label>'s are required
//each <input> has the same value for the "name" attribute, so that it groups the inputs together, however each <input> id attribute 
//  has a unique id value to pair with each label for attribute value
//? The order of the label and input can be switched depending on what's best, for checkboxes it's usually best to put the input before
//?   the label.

//! type="radio"
//the type="radio" attribute value pair is used for <input> to create radio buttons which have multiple options like a checkbox, but only
//  allows you to select one item of the <input> group, other than the fact that it only allows one selection by the user, it is set up 
//  and functions the same way as a checkbox, example:
/*
! <form action="/practice.html" method="POST"
!   <p>What colors make up the color orange?</p>

!   <input type="radio" id="blue-and-purple" name="color-options" value="blue and purple"> //first option
!   <label for="blue-and-purple">Blue and Purple</label>

!   <input type="radio" id="yellow-and-red" name="color-options" value="yellow and red"> //second option
!   <label for="yellow-and-red">Yellow and Red</label>

!   <input type="radio" id="red-and-green" name="color-options" value="red and green"> //third option
!   <label for="red-and-green"Red and Green</label>
! </form>
*/


//the dropdown list is used when there are more than a few items to choose from:
//! <select>
//the <select> element contains <option> elements and allows the user to select an option from a dropdown list of options, it is 
//  connected with a <label> element by having the same id attribute value as the <label> elements for attribute value.
//It also contains the name attribute and the value of what the input is being used for, so that it can be sent with "value" value when 
//  the form is submitted.

//! <option>
//the <option> element is held as a child of the <select element and is used to create each single option in the dropdown list, each 
//  option has a value attribute with the value set so that it can be used to pair with the name attribute and sent when the form is 
//  submitted.
//Example:
/*
! <form action="/practice.html" method="POST">
!   <label for="language">Select your perferred language: </label>
!   <select id="language" name="language">
!     <option value="English">English</option>
!     <option value="Japanese">English</option>
!     <option value="Simplified Chinese">Simplified Chinese</option>
!     <option value="Traditional Chinese">Traditional Chinese</option>
!     <option value="Spanish">Spanish</option>
!     <option value="Korean">Korean</option>
!     <option value="French">French</option>
!     <option value="Turkish">Turkish</option>
!   </select>
! </form>
*/

//! <datalist>
//the <datalist> element is used in place of the <select> element for lists that are tedious to scroll through all options, it is used 
//  with the <input type="text"> element. <input> creates a text field that users can type into and filter through options in <datalist>.
//the <input> element is linked to the <datalist> element through the matching the <input> "list" attribute value and the <datalist> "id"
//  attribute value.
//If none of the options match the user input text, the value typed in can still be used. When the form is submitted the "name" attribute
//  value and the "value" attribute value of the option selected or the input text is sent as a pair.
//Example:
/*
! <form action="/practice.html" method="POST">
!   <label for="book-type">What type of book do you want to read?</label>
!   <input type="text" list="book-types" id="book-type" name="book-type">

!   <datalist id="book-types">
!       <option value="Non-fiction">Non-fiction</option>
!       <option value="Fiction">Fiction</option>
!       <option value="Romance">Romance</option>
!       <option value="Action">Action</option>
!       <option value="Comedy">Comedy</option>
!       <option value="Time Travel">Time Travel</option>
!       <option value="Isekai">Isekai</option>
!       <option value="Slice of Life">Slice of Life</option>
!       <option value="Family">Family</option>
!       <option value="Religious">Religious</option>
!   </datalist>
! </form>
*/

//! <textarea>
//the <textarea> element is used in place of the <input> element to create a bigger text field for users to write more text. The attributes
//  "rows" and "cols" is used to determine the amount of rows and columns for the <textarea>. If the user wants a bigger text field they
//  can click and drag the bottom right corner to expand it.
//When the form is submitted the value of <textarea> is the text written inside the <textarea> field, but a default value can be added if
//  there is text written in between the opening and closing <textarea> tags.
//Example:
/*
!   <form action="/practice.html" method="POST">
!       <label for="comment">New comment: </label>
!       <textarea id="comment" name="comment" rows="5" cols="35">Enter comment here...</textarea> //don't add any space between the element
!                                                                                                 //    and inner content
!   </form>
*/

//! type="submit"
//to create a submit button use the type="submit" attribute value pair inside the <input> element
//to create the text on the submit button, set the value attribute to the value of the text to display to the user, if there isn't a value
//  attribute, the default text "Submit" shows up on the button
//Example:
/*
! <form action="/practice.html" action="POST">
!   <input type="submit" value="Post"> //This creates a submit button with the word "Post" displayed on it for the user to see
! </form>
*/

// * * HTML Forms end

// * * Form Validation:

//server-side validation: when data is sent to another machine (typically a server) for validation, an example is a login page
//client-side validation: when data is checked on the brower (or client), this occurs before the data is sent to the browser,
//  HTML5 has built-in client-side validation that is shared among different browsers. This saves time and helps protect the server
//  against malicious code and or data from a malicious user. It also allows quick feedback for specific fields rather than having to fill
//  out the form again if the data is rejected.

//! required
//the "required" attribute is used in a form <input> element to make sure a field is filled in before the form can be submitted, if it
//  is not filled in a message on the field will pop up telling the user to fill in the field, this differs from browser to browser.

//! min
//! max
//the "min" and "max" attributes can be used for the <input> element type="number" to set a minimum and maximum value that can be filled
//  in the form field, it the number isn't inside the range set by min and max when submitted a message will pop up saying to pick a
//  bigger or smaller number than the set min or max based on which limit was not met

//! minlength
//! maxlength
//the "minlength" and "maxlength" attributes are used to set a minimum and maximum length of characters for a text field, these attributes
//  are added to the <input> and <textarea> elements to set this range. If a user submits the form when the amount of characters are lower
//  than this range then a message will pop up saying the amount of characters needed and the number of characters the user currently
// is using and it will stop the user from typing when it gets to the maximum number of characters set by maxlength.

//! pattern
//the "pattern" attribute is assigned a regular expression, or regex that is used for cases when the user input to meet specific guidelines
//  Regular expressions are a sequence of characters that make up a search pattern, if the input matches the regex than the form can be 
//  submitted.
//If a pattern isn't matched a message will pop up on the field that says to match the provided format

//! pattern="[0-9]{14, 16}"
//this checks that the user only used numbers and that they inputted at least 14 digits and at most 16 digits

//! pattern="[a-zA-Z0-9]+"
//this checks that only letters, lowercase and uppercase; and numbers were used in the form field

//! method="GET"
//! method="POST"
//both of these are used to communicate data to the server, the difference between these two is that a GET request doesn't change anything
//  about the server (sends a page), while "POST" changes or updates something about the server that would change how the page or website 
//  works (forms: buying something, creating an account, rent a movie, etc.)

// * * Form Validation end

// * * Classes:

//although there are similarities between class and object syntax, the constructor method sets classes apart from objects, JS calls the 
// constructor() method every time it creates a new instance of a class

//class names are capitalized and in PascalCase
//Example of a class:
/*
! class Flower {   //Flower is the name of the class in PascalCase
!   constructor(name){    //the constructor takes one argument of name
!     this.name = name;    //"this." refers to an instance of the class and is used to set the name property to the name argument
!     this.isPascalCase = false;    //"this." sets the isPascalCase property to an initial value of false
!   }
! }
*/

//creating class instances example:
/*
! const lilly = new Flower('Lilly'); //creates new variable named "lilly" that stores a new Flower instance using the "new" keyword which: 
!                                    //  calls the constructor(), runs the code inside it, and returns a new instance.
!                                    //"Lilly" is passed to the Flower constructor, which sets the name property to "Lilly"
! console.log(lilly.name); //logs the name value saved to lilly, which is results in: "Lilly".
*/

//class method and getter syntax is the same as it is for objects, except commas can not be included between them, example:
/*
! class Movie {
!   constructor(name, year){
!   this._name = name;  //the _ in _name is used to indicate that the property should not be accessed directly
!   this._year = year;  
!   this._rating = 0;
!   }
!                       //no commas used between
!   get name() {
!     return this._name;    
!   }

!   get year() {            //this is a getter that will be accessed to get the value of this._year
!     return this._year;    
!   }

!   get rating() {
!     return this._rating;    
!   }

!   setRating(newRating){      //this is a method that can change the value of "rating" by accessing the instance and setting the method 
!                              //   of the class.
!     this._rating = newRating;
!   }
! }
*/

//inheritance of classes:
//When mutiple classes share properties or methods, they can use inheritance; tool to decrease the amount of code a devoloper needs to 
//  write.
//A parent class (know as a superclass) can be created with properties and methods that multiple child classes (known as subclasses) 
//  share. 

//To extend a superclass to a subclass this is the syntax used in the subclass:
/*
! class Production {
!   constructor(name, year) {
!     this._name = name;
!     this._year = year;
!     this._rating = 0;
!   }

!   get name() {
!     return this._name;
!   }

!   get year() {
!     return this._year;
!   }

!   get rating() {
!     return this._rating;
!   }

!   setRating(newRating) {
!     this._rating = newRating;
!   }
! }

! class Movie extends Production {      //extends allows for the Movie class to have access to the methods in the Production class
!   constructor(name, year, isLong) {
!     super(name, year);                //the super keyword calls the constructor of the parent class and passes the arguments to that 
!                                       //  parent constructor. And when the Production (superclass) constructor runs it sets the 
!                                       //  properties for a new Movie (subclass) instance .
!     this._isLong = isLong;            //new property
!   }

!   get isLong {
!     return this._isLong;    
!   }
! }

! class TVShow extends Production {
!   constructor(name, year, episodes) {
!     super(name, year);
!     this._episodes = episodes;       //new property
!   }

!   get episodes {
!     return this._episodes;    
!   }

!   addEpisodes(numOfEpisodes){
!     this._episodes += numOfEpisodes;    
!   }
! }
*/
//? the "super" method must always be called before the "this" keyword is used, if it is not a reference error will be thrown.

//static methods are called on a class, but not on instances of a class:
//! static
//the "static" keyword makes methods that are only accessible from a specific class, not to instance or instances of their children (or 
//  subclasses). If you try to access it through a subclass (¿or instance?), it will result in a TypeError.
//Example (added to Production example):
/*
! static filmNumber(){     //this can only be accessed through the Production class
!   return Math.Floor(Math.random() * 20000) + 1; 
! }

! Production.filmNumber();
*/

//?Classes are templates for objects, classes make it easy to create multiple objects that share property names and methods, works like
//?  factory functions do, example: 
/*
! const objectFactory = (name, age, creator, objectUse) => {
!   return { 
!     name: name,
!     age: age, 
!     creator: creator,
!     use() {
!       console.log(objectUse);
!     } 
!   }
! };
*/

//constructors and getters are considered methods too

//?Find out better how setters work in objects and classes: to set specific conditions for an input and warning messages that an input
//?   doesn't work.

// * * Classes end

// * * Modules:

//Modules are reusable peices of code in a file that can be exported and inported into another file to use.
//A modular program is one of those components that can be separated, used individually, and recombined to create a complex system.
//? the words "module" and "file" are often used interchangably
//the modular strategy of having components broken up into separate modules that each handle a particular task is sometimes called 
//  "separation of concerns" and is useful for many reasons. By isolating code into separate files, called modules, you can:
//! find, fix, and debug code easier
//! reuse and recyle defined logic in different parts of your application
//! keep information private and protected from other modules
//! prevent pollution in the global namespace and potential naming collisions, by cautiously selecting variables and behavior loaded in
//!   the program

//A runtime environment is where your program will be executed. It determines what global objects your program can access and it can also
//  impact how it runs. 

//* Node runtime environment code:
//process: an object containing data relating to the JavaScript file being executed.
//process.argv: when a program is executed in the Node evironment, process.argv is an array holding the arguments provided, to input 
//  values into your code while executing the Node environment process.argv[2] and continuing index values for the amount of input needed:
/*
!    const favoriteNum = process.argv[2];
!    console.log(`Your favorite number is ${favoriteNum}.`);

!    bash terminal:
!    $ node practice.js 120              //there is three arguments and the third value is taken as input
!    Your favorite number is 120.        //this is the result of running the code
*/

//process.env: an object containing environment variables such as:
//! process.env.PWD //which contains the current working directory
//* End Node runtime evironment code

//There are mutiple ways of implementing modules depending on the "runtime environment" in which the code is executed. JavaScript has two
//  runtime environments and each has a perferred module implementation:
//! The "Node" runtime environment and the "module.exports" and "require()" syntax
//! The browser's runtime environment and the "ES6" "import"/"export" syntax

//** Node:
//When there is repeated functions in multiple modules, it is better to create a new module that exports that function, so there isn't 
//  duplicate code and to cut down on time spent and data used on the program.
//To create a new module simple create a new file where the functions can be declared. Then to make those functions available to other 
//  files, add them as properties to the build in "module.exports" object: 
//how to use the Node.js "module.exports" object to export code from a file- meaning its functions and/or data can be used in other files/
//  modules)?:
/*
! //example from Codecademy:

! //converters.js  
! function celsiusToFahrenheit(celsius) {
!   return celsius * (9/5) + 32;
! }

! module.exports.celsiusToFahrenheit = celsiusToFahrenheit;     //the function was added as a property of module.exports with the property 
!                                                               //  name the same name as the function name, to export to other files
! module.exports.fahrenheitToCelsius = function(fahrenheit) {   //the anynomous function was added as a property of module.exports, to 
!                                                               //  export to other files
!   return (fahrenheit - 32) / (5 / 9);                         
! };
*/
//the properties are actually methods, because when used in other modules they will take in an argument

//the "require()" function accepts a string as an argument that provides the file path to the module you would like to import.
//how to use the Node.js "require()" function to import functions and/or data from another module:?
/*
! //example from Codecademy:

! //water-limits.js
! const converters = require('./converters.js'); //this gets the whole "module.exports" object that is exported from converters.js and 
!                                                //  stores it in the converters variable.
! const freezingPointF = converters.celsiusToFahrenheit(0); //the value is set to freezingPointF by calling the method 
!                                                           //  celsiusToFahrenheit() that was set in converters.js to the module.exports
!                                                           //  object.
! const boilingPointF = converters.celsiusToFahrenheit(100);
*/
//in many cases, modules will export a large number of functions, but only one or two are needed, object destructuring can be used to 
//  extract only the needed functions. Example:
/*
! //example from Codecademy:

! //updated water-limits.js
! const { celsiusToFahrenheit } = require('./converters.js'); //this selects extracts just the celsiusToFahrenheit method from the 
!                                                             //  module.exports object
! const celsiusInput = process.argv[2]; //allows a third argument to be inputted manually from terminal when using Node runtime environment
! const fahrenheitValue = celsiusToFahrenheit(celsiusInput); //sets fahrenheitValue by using the celsiusToFarenheit() method and 
!                                                            //  celsiusInput as a manual input
*/
//this makes it possible to import only the needed methods and leave out the rest

//** ES6:
//! export
// the export statement:
//! export { resourceToExport1, resourceToExport2 }; //ES6 export statement
//or individually by placing export in front of the variables declaration
//! export const resourceToExport1 = (arg) => { //logic }
//! export const resourceToExport2 = (arg) => { //logic }
//Example in use:
/*
! //From Codecademy:

! //dom-functions.js 
! const toggleHiddenElement = (domElement) => {     //!switches the chosen element into or out of view depending on how many times 
!                                                   //  function is used.
!   if (domElement.style.display === 'none') {
!     domElement.style.display = 'block';
!   } else {
!     domElement.style.display = 'none';
!   }
! }

! const changeToFunkyColor = (domElement) => {    //!changes the chosen element's background color to a random color
!   const r = Math.random() * 255;              //it doesn't need to be rounded, since the value doesn't need to be a whole number
!   const g = Math.random() * 255;
!   const b = Math.random() * 255;

!   domElement.style.background = `rgb(${r}, ${g}, ${b})`;  //values can be set in a string to the document object style property
! }

! export { toggleHiddenElement, changeToFunkyColor };    //this exports the two stated functions from this module to be used in other files 
*/


//! import
// the import statement:
//! import { exportedResource1, exportedResorce2 } from '/path/to/module.js';
//Example in use:
/*
! //From Codecademy:

! //secret-messages.js
! import { toggleHiddenElement, changeToFunkyColor } from '..modules/dom-functions.js'; //this imports the two stated classes to this file

! const buttonElement = document.getElementById('secret-button'); //saves element with the ID of secret-button to buttonElement variable
! const pElement = document.getElementById('secret-p'); //saves element with the ID of secret-p to pElement variable

! buttonElement.addEventListener('click', () => {   //the new function takes in both functions on a click element for stated element saved 
!                                                   //  to the variable. If it was for one, the function could probably just be used alone.
!   toggleHiddenElement(pElement);
!   changeToFunkyColor(buttonElement); 
});
*/
//if you are getting using a JS  module to export part of your code and import it into the JS file that affects the HTML element, inside
//  the <script> element the attribute "type" is needed with the value of "module", some browsers will throw an error. 
//Example from Codecademy:
/*
! <script type="module" src="./secret-messages.js></script>
*/

//?to try this on my own computer I will need to spin a local server or there CORS (Cross-Orgin Resource Sharing) issues. Details about 
//?  how to do this is save in the Websites folder with the name: Spinning Up a Local Server.

//when there are naming collisions between resources you import share a name with some other value that already exists in your program 
//  (or from another imported module) the imports can be renamed:
//Examples from Codecademy:
//format:
//! import { exportedResource as newlyNamedResource } from 'path/to/module';
/*
! // main.js
! import { greet as greetEspanol } from './greeterEspanol.js';
! import { greet as greetFrancais } from './greeterFrancais.js';

! greetEspanol(); //Prints: hola
! greetFrancais(); //Prints: bonjour
*/

//Instead of exporting each modules resources individually by name, each module also has the option to export a single value to represent 
//  the entire module called the "default export". The default export value is often an object containing the entire set of functions 
//  and/or data values of the module.
//Syntax for exporting a default object:
/*
! const resources = {
!   value1, 
!   value2  
! }

! export { resources as default };  //exported "resources" object renamed to "default"
*/
//shorthand syntax:
/*
! const resources = {
!   value1,
!   value2
! }

! export default resources;  //"resources" is the default value to be exported as default
*/


//the syntax for importing default exports:
/*
! import importedResources from 'module.js';
*/
//this was the shorthand for "import { default as importedResources } from 'module.js'"

//if the default export is an object, the values inside cannot be extracted until after the object is imported:
/*
! //correct:
! import resources from 'module.js';
! const { value1, value2 } = resources;

! //incorrect:
! import { value1, value2 } from 'module.js';
*/

// * * Modules end

// * * Error Handling:
//JS has built-in error objects that have a "name" and "message" property which tells what has gone wrong.
//Some built-in runtime errors are the:
//  -ReferenceError: when a variable or function cannot be found
//  -TypeError: when a value is not a valid type
//Example of a TypeError from Codecademy:
/*
! const reminder = 'Reduce, Reuse, Recycle';
! reminder = 'Save the world';   //can't reassign a constant variable, so where will be a TypeError Thrown

! console.log('This will never be printed!');   //Since a TypeError was thrown before this line, this will never be evaluated.
*/

//! Error('');
//The Error() function takes an argument of a string that becomes the value of the error's "message" property. 
//Example:
/*
! console.log(Error('This is not a plural noun.'));     // prints: Error: This is not a plural noun.
*/
//Errors can be created using the "new" keyword, but both methods lead to the same functionality.
/*
! console.log(new Error('This is not a plural noun.')) //prints: Error: This is not a plural noun.
*/
//This is creating an error, not throwing an error. Since this isn't thrown error it won't cause the program to stop running.
//Example:
/*
! console.log(Error('This will not stop code below')); //The error message and data is shown in the console.
! console.log('Yay, I am printed!');    //This "code is still run" after the error message and data is completed
*/

//! throw
//To throw an error in JS the "throw" keyword is used before the Error() function, then code after the thrown error won't be executed.
//Example:
/*
!  throw Error('No code executed after this'); //Error: No code executed after this will be thown and shown in the console
!  console.log('This will never be printed!'); //since an error was thrown before this, this will never be evaluated
*/

// try...catch
//the "try...catch" statement is used to anticipate and handle errors, by having code that addresses the error and allows the program to 
//  continue running.
//Example from Codecademy:
/*
! try {
!   throw Error('This error will be caught'); //this is the try block, following try inside of the curly brackets{}
!                                             //the code in entered in this block is code that has a possiblity of throwing an error 
! } catch(e) {         //this catch statement accepts the thrown error from the try block, "e" represents the thrown error
!   console.log(e);     //this is the catch block an it contains code that executes to handle the error
! }                    //prints: This error will be caught

! console.log('The thrown error that was caught in the try...catch statement!'); //this code runs since the error was caught.
*/
//the try block is where the code is evaluated and if the code throws an error, the code in the catch block will handle the error for us

//the try...catch statement "can be used for built-in JS errors" and is really beneficial when data needs to be used from an external 
//  source thats not directly witten in our program. Like importing an array of data, it imports a string instead, if a function can only
//  work with arrays this can handle the throw error, so the program keeps running, and there is a message logged to the console telling 
//  whats wrong.
//Example from Codecademy:
/*
! const someVar = 'Cannot be reassigned';
! try {
!   someVar = 'Still going to try';
! } catch(e) {
!   console.log(e);
! }
! //prints TypeError: Assignment to constant variable.
*/

// * * Error Handling end

// * * Basic Git Workflow:

//! git init
//is used in a directory to turn it into a git project

//! git init <directory>
//is used to great a git repository in the specified directory

//! git clone <repository_url>
//clones a repository from a remote server to the local machine

//! git clone –branch <branch_name> <repository_url>
//clones a specific branch from a repository

//! git status
//is used to check the status of changes made inside the working directory

//! git add 
//and filename(s) is used to update or add the file(s) used to the staging area, can add multiple specific files with a space between 
//  the different files; example:
/*
! git add filename.txt anotherfile.txt myfile.js
*/

//! git add .
//stages all files in the working directory

//! git diff
//and a filename is used to track the differences between the working directory and the staging area, changes are marked with a plus sign
//  "+" and indicated in green; example of how to write command:
/*
! git diff changes.txt
*/

//! git commit -m ""
//to commit staged changes this command is needed along with a message inside the quotes detailing what was done, written in the 
//  present tense, should be 50 characters or less. example:
/*
! git commit -m "Create class to encode and decode secret messages" //details in 49 characters in present tense
*/

//! git log
//is used to refer back to an earlier version of a project, commits are stored chronologically in the repository and this allows them to 
//  be viewed. The output will be: 
// -  40-character code, called SHA, in orange, that uniquely identifies the commit.
// -  the commit author
// -  the date and time of the commit
// -  the commit message

//? if cursor is stuck in git log mode use the "q" key to escape

//! git branch 
//creates a new branch in the working directory

//* Aliases:
//instead of typing out long git commands every time I want to use them, I can set an use an alias for commands I commonly use by using
//  this format, example:
//! git config --global alias.camne "commit --amend --no-edit"
//this will allow me to type:
//! git camne 
//to edit the last commit, instead of this longer statement every time:
//! git commit --amend --no-edit

// * * Basic Git Workflow end

// * * How to Backtrack:

//! git show HEAD
//this is used to see the HEAD commit, the commit you are currently on. The things added are in green with a plus sign (+) in front and 
//  the things deleted are in red.

//! git checkout HEAD
//and the filename is used to revert code in a file to how it was at the last commit before staging, in other words to the HEAD commit.
/*
! git checkout HEAD filename.txt
*/
//discards changes in the working directory

//! git checkout --
//and filename does the same thing as git checkout HEAD filename, this is a shortcut for it.

//! git checkout -- .
//is a shortcut that can be used to revert all files in the directory to the last HEAD commit

//! git reset HEAD
//and the filename is used to unstage a file from the staging area, this command resets the file in the staging area to be the same as 
//  the HEAD commit. 
//Example:
/*
! git reset HEAD arrowhead.js
*/
//unstages file changes in the staging area

//! git reset 
//and the commit_SHA's first 7 characters sets HEAD back that previous commit, example:
/*
! git reset 5d6921s     //sets back to the commit that starts with this
*/
//this resets the history of your project to previous commit in commit history you pick, and anything after that commit is not part of 
//  the project anymore.

//! git stash
//this stores work temporarily for later use in a hidden directory, this allows you to "switch branches" and fix bugs in another file 
//  from a previous commit, then when the bugs are fixed you "switch branches" again and can retrieve the code you were working on using:
//! git stash pop
//which pops back the work stored when using git stash.

//! git stash list
//lists out all current work saved saved in stash, which can be many many items

//! git stash -h
///gives a list of other things you can do using "git stash"

//! git checkout
//and the branch name switches to that branch out of the branch you are in, in order to switch everything in the current branch must be
//  committed, in other words, the same as the HEAD commit.

//! git log --oneline
//shows the list of commits in one line format

//! git log -S "keyword"
//where keyword is replaced with a keyword, displays a list of commits where the number of occurrences of the keyword changes within at
//  least one file via addition, deletion, or modification; example:
/*
! git log -S "Add"  //finds any commits where the number of occurrences of "Add" within a file changes
*/

//! git log --oneline --graph
//--graph displays a visual representation of how how the branches and commits were created, to help make sense of the repository history,
//  this is used with --oneline to shorten the discription for easier readability.

//! git commit --amend
//allows commits to be corrected and editted easily, instead or creating a new completely new commit. To correct the mistakes from the 
//  current HEAD commit, you edit the few things that were supposed to be in that commit stage them, then use the "git commit --amend" 
//  command, but since this replaces the whole last commit your terminal editor asks you to update your commit message; if you want to 
//  keep the same commit message add the "--no-edit" flag to this, example:
/*
! git commit --amend --no-edit
*/

// * * How to Backtrack end

//use shift + tab to shift code to the left

//use command ^>format document^ to use prettier on code to format code correctly