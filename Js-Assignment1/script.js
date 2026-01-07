// Linking JavaScript Files
// 1. Create an HTML file and link JS file like this:
// 2. In app.js, write: console.log(“Connected!”)
// 3. Move the script tag to the section and see what happens.
// 4. Try using defer:
// <script defer src="script1.js"></script>
// <script defer src="script2.js"></script>
// Goal: Understand how to connect JS with HTML.

// Running JS in Browser Console

// Js assignment 27-oct-2025 1

// 1. Open console and type: 2 + 2
// 2. Type: alert(“Hi”)
// 3. Try: prompt(“Your name?”)
// 4. Type: let city = “Bhopal”; city

// Answers:
// console.log("Connected!")
// alert("Hi")
// prompt("Your name?")
// let city = "Bhopal";
// console.log(city)


//----------------------------------------------------------------------------------


// Variables and Keywords (var, let, const)
// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c
// = “School”
// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// 3. Create a variable inside curly braces using let and log it outside.
// 4. Predict output before running.
// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)

// Answers:
// var a = "Faizan";
// let b = "Sheryians";
// const c = "School";

// now reassigning values
// a = "Updated";
// b = "Updated";

// {
// let a = "yo yo honey singh";
// } 
// console.log(a);   // a is not defined error will occur because a is defined inside the block scope


//----------------------------------------------------------------------------------


// Logging and Interaction (console, alert, prompt)
// 1. Log name, age, and city using console.log, console.info, console.warn.
// 2. Use prompt to take user’s name → alert a welcome message.
// 3. Log typeof of user’s input.
// 4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what happens.

//Answers:
// console.log("Faizan");
// console.info("Age: 23");
// console.warn("City: New Delhi");

// let username = prompt("Enter your name:");
// alert(`Welcome, ${username}`)
// console.log(typeof username);

// let age = prompt("Enter age:");
// console.log(age + 5);  // it will combine them because prompt is taking input as a string so output will be 235


//----------------------------------------------------------------------------------


// Working with Strings
// 1. let msg = “I love Sheryians”;

// Js assignment 27-oct-2025 2

// 2. Try msg.slice(2, 6) and predict the result.
// 3. Try msg.split(” “) and count words.
// 4. Try msg.replace(“love”, “study at”).
// 5. Template string example: let name = “Harsh”; console.log(Hey ${name},
// welcome to JS!)
// 6. Check if msg.includes(“love”)

// Answers:
// let msg = "I love Sheryians";
// console.log(msg.slice(2,6));  // output is "love"
// console.log(msg.split("")); // output is ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'S', 'h', 'e', 'r', 'y', 'i', 'a', 'n', 's']
// console.log(msg.replace("love", "study at")); // output is "I study at Sheryians"
// console.log(msg.includes("love"));  // output is true

// let name = "Faizan";
// console.log(`Hey ${name}, welcome to JS!`);


//----------------------------------------------------------------------------------


// Statements and Semicolons
// 1. Remove semicolon and check if code still runs.
// 2. Combine two statements in one line and see if it breaks.
// 3. Write 3 console.log statements without semicolons and predict output.

// console.log("Hello") // output Hello on console so yes
// console.log("My name is"); console.log("Faizan") // without semicolon its giving error

// console.log("This is line 1")
// console.log("This is line 2")
// console.log("This is line 3")
// output same no error and javascript automatically adds semicolon where it is missing so its work


//----------------------------------------------------------------------------------



// Expressions vs Statements
// 1. Type 5 + 10 (expression).
// 2. Type let x = 10; (statement).
// 3. Which one gives a value immediately?

// Js assignment 27-oct-2025 3

// 4. Try: let y = (5 + 10) * 2; console.log(y)
// 5. Write one line explaining the difference between both.

// answers:
// 5 + 10 
// let x = 10;
// expression gives value

// let y = (5 + 10)*2;
// console.log(y); // output is 30
// well an expression gives a value while statement is like an instruction to perform an action


//----------------------------------------------------------------------------------



// Data Types
// 1. let age = 25; let name = “Harsh”; let isStudent = true; let skills = [“JS”,
// “HTML”]; let user = { city: “Bhopal” }; let x = null; let y; let z = Symbol(“id”)
// 2. Log typeof each variable.
// 3. Change one value and recheck typeof.
// 4. Try adding a number and string together.

//Answers:
let age = 25; 
age = "twenty three";
// let name = "Faizan";
// let isStudent = true;
// let skills = ["JS", "HTML"];
// let user = {city: "New Delhi"};
// let x = null;
// let y;
// let z = Symbol("id");
console.log (typeof age); // number   // now the output change and its beomce string
// console.log (typeof name); // string
// console.log (typeof isStudent); // boolean
// console.log (typeof skills); // object so arrays are of type object in js hmm
// console.log (typeof user); // object
// console.log (typeof x); // object
// console.log (typeof y); // undefined
// console.log (typeof z); // symbol
console.log(5 + "10"); // output is 510



//----------------------------------------------------------------------------------


// Primitive vs Reference
// 1. let x = 5; let y = x; y = 10; console.log(x, y)
// 2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;
// console.log(obj1.name)
// 3. Observe which one changes together.
// 4. Draw memory boxes on paper to visualize difference.

// Answers:
let x = 5;
let y = x;
y = 10;
console.log(x);
console.log(x, y) // output is 5 5 then when y is 10 then o/p is 5 10 

let obj1 = {name: "Faizna"};
let obj2 = obj1;
obj2.name = "Sheryians";
console.log(obj1.name);
// output is Sheryians because both obj1 and obj2 are referencing the same object in memory so when we change obj2 the change is reflected in obj1 as well because in js objects are reference types and primitive types are stored directly in the variable memory location while reference types store a reference to the memory location where the object is stored.

