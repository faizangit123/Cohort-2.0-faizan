// js intro let , var , const , alert, prompt, include, split, slice , Template Literals (using backticks ``)  
// and console.log, .error, .warn, .info, .table, .clear

// alert("yo")   // alert is used to show a popup message to the user

// prompt("write your name")  // it just use to take input from the user

console.log("how do u do")  // it is used to print something on the console which is mostly used for debugging as it shows what is wrong in the code

console.error("error occured")   // it just to show error in red color on the console

console.warn("like this a warning")  // it just to show warning in yellow color on the console

console.info("this is some info")  // it just to show info in blue color  on the console in some browsers like ! it works same as console.log

console.table({name:"faizan", language:"js", note:"this is table"})  // it is used to show data in table format on the console

// console.clear()   // it is used to clear the console

// varialbes in js:

// {
//   var a= 10;             // var is old way
// }

// console.log(a)          // the code is not suppose to work cause the variable is inside the curly braces and it should not be accessible outside the curly braces but var ignores that and makes the variable global

//{
//  let a = 10;           // let is the new way
//}
//console.log(a)          // the code will not work cause let respects the block scope and the variable is not accessible outside the curly braces 

// {
// const pi = 3.14;        // const is also block and what is block scope well it is anything inside curly    braces { } and variables declared with const do not change their value
// }

// console.log(pi)         // the code will not work cause const also respects the block scope and the variable is not accessible outside the curly braces 

// Summary : var is function scoped and ignores block scope , let and const are block scoped

let string = "Starting javaScript"
console.log(string.slice(0,8))  // slice is used to cut a part of the string from starting index(in js index starts from 0) and the way slice works is that the first parameter is the starting index which will show and the second parameter is the ending index but the ending index will not include the character at that index so in this case it will show character from index 0 to index 7 so the output will be "Starting" 

let sting2 = "man, woman, child, baby, teen"
let arr = sting2.split(",")
let arr1 = sting2.split("m")
console.log(arr,arr1)  // split is used to split a sting into an array based on the parameter(what is parameter? parameter is what you give to a function to make it work so in this case the parameter is the character on which you want to split the string and so "," is the parameter? yes it is) so in this case the string will be split into an array(list of items) whereverr there is a ",". so in this case the first split will split the string at every comma and the second split(arr1? it is just a variable name i can give any name) will split the staring at every 'm' character so the output will be like this : arr ['', 'an, wo', 'an, child, baby, teen'] and arr1 ['man', ' woman', ' child', ' baby', ' teen']

//what is template literals? well to use template literals we have to use backticks `` instead of single and double quotes and the main advantage of using TL is that we can use variables and expressions(what is expression? expression is anything that produces a value like 5+5 is an expression which produces value 10) inside the string without breaking the string and to use variables and expressions inside TL we have to use ${} this syntax so anything inside ${} will be treates as a variable or expression and the rest will be treated as string example:

let name = "faizan"
let add = 5+5
console.log(`my name is ${name} and the addition of 5 + 5 is ${add}`) 

// replace method in simple words is used to replace a part of the string with another part like this:
let greet = "Yo Yo honey singh"
console.log(greet.replace("honey singh", "faizan"))  // so why we write greet. inside console.log 