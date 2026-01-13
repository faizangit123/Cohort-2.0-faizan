// Assignment - 29 Oct
// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)

// Answers:
// a.Arithmetic operators 
// Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

// let a = 10;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// b.Assignment operators
// Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

// let x = 5;
// x = x + 3;
// x += 3;
// x -= 3;
// x *= 3;
// x /=3;
// console.log(x)

//c. Increment and Decrement operators
// let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

// let count = 5;
// console.log(count);
// count++;
// console.log(count);
// count--;
// console.log(count);
// --count;
// console.log(count);
// ++count;
// console.log(count);

//d. Comparison operator
// Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

// console.log(5 == "5");  // true
// console.log(5 === "5");  // false 

// e. comparison operators
// Check if 10 is greater than 5, less than 20, and equal to 10. so what operators is this? well its 
// console.log(10>5);
// console.log(10<20);
// console.log(10 === 10);

// f. logincal operators
// Try logical AND and OR:
// true && false
// true || false
// !(true)

// console.log(true && false);
// console.log(true || false);
// console.log(!(true));

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

// for first one it would be like (ture and ture) so the ans is true
// as for the second one (true or false) so the ans is true


// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

// console.log(5 & 1); 
// console.log(5 | 1);
// console.log(5 ^ 1);
// console.log(~5);
// console.log(5 << 1);
// console.log(5 >> 1);
// bitwise? in simple terms its like comparing the binary form(0,1) of the numbers so how many types of bitwise operators are there? well there are AND(&), OR(|), NOT(~), XOR(^), LEFT SHIFT(<<), RIGHT SHIFT(>>).


// 2. Variable Hoisting in JavaScript

//Answers:-
// a. Predict output of:
// console.log(a);
// var a = 10

// undefine as Harsh sir said before in hoisting variable breaks in two part which is declaration (var a) and initialization (a = 10) 

// b. Predict output of:
//console.log(b);         //Uncaught ReferenceError: Cannot access 'b' before initializatio at app.js:111:13  
//let b = 10              

// c. Predict output of:
// test()
// function test() { 
//   console.log('Hello') 
// }
// hello 


// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { 
//   console.log('Hi') 
// }
// Write what happened and why.
// because function expression(gives a value, like anything on the right side of = ) is not hoisted like funciton declaration and why? 
// because in fun exp the variable is assigned to a fun so only the variable is hoisted not the funtion itself so when we try to call it before initi it gives error  
// example: let total = 5 + 5; // in the 5 + 5 is an expression and let total = 5 + 5;  is the statement
// output:- app.js:117 Uncaught TypeError: hello is not a function at app.js:117:1


// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?
// variable declaration and function declaration gets hoisted but variable initialization and function expression does not get hoisted fully.
// let and const variable declaration does not get hoisted at all.



// 3. Conditional Operators (if, else, else-if, ternary, switch)

// Answers:-
// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

// let age = prompt("Enter your age: ")
// if (age>=18){
//   console.log("Adult")
// }
// else{
//   console.log("Minor")
// }

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let marks = parseInt(prompt("Enter your Marks:"));
// if (marks>=90)  console.log("A grade");
// else if (marks>=75) console.log( "B grade");
// else if (marks>=50) console.log("C grade");
// else console.log( "Fail");

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

// let city = "Delhi";
// if (city == "Delhi"){
//   console.log("Capital")
// }
// else if (city == "Bhopal" ){
//   console.log("MP")
// }

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

// let score = 40;
// score > 35?console.log("Pass"):console.log("Fail")

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// let temp = 45;
// temp > 30? console.log("Hot"):console.log("Plesent")

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

// let day = parseInt(prompt("Enter day number (1-7):"));
// switch(day){
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;  
//   case 6: 
//     console.log("Saturday");
//     break;  
//   case 7: 
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Day");
// }

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

// let age = prompt(parseInt("Enter your age:"))
// let country = prompt("Enter your country")
// if (age>=18 && country == "India"){
//   console.log("Eligible for Vote")
// }
// else{
//   console.log("Not eligible")
// }

// bipass
// for(let i=1; i<11; i++){
//   if(i === 5 || i === 7){
//   } else console.log(i)
// }