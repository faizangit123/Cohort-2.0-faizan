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

// let sting2 = "man, woman, child, baby, teen"
// let arr = sting2.split(",")
// let arr1 = sting2.split("m")
// console.log(arr,arr1)  // split is used to split a sting into an array based on the parameter(what is parameter? parameter is what you give to a function to make it work so in this case the parameter is the character on which you want to split the string and so "," is the parameter? yes it is) so in this case the string will be split into an array(list of items) whereverr there is a ",". so in this case the first split will split the string at every comma and the second split(arr1? it is just a variable name i can give any name) will split the staring at every 'm' character so the output will be like this : arr ['', 'an, wo', 'an, child, baby, teen'] and arr1 ['man', ' woman', ' child', ' baby', ' teen']

//what is template literals? well to use template literals we have to use backticks `` instead of single and double quotes and the main advantage of using TL is that we can use variables and expressions(what is expression? expression is anything that produces a value like 5+5 is an expression which produces value 10) inside the string without breaking the string and to use variables and expressions inside TL we have to use ${} this syntax so anything inside ${} will be treates as a variable or expression and the rest will be treated as string example:

let name = "faizan"
let add = 5+5
console.log(`my name is ${name} and the addition of 5 + 5 is ${add}`) 

// replace method in simple words is used to replace a part of the string with another part like this:
let greet = "Yo Yo honey singh"
console.log(greet.replace("honey singh", "faizan"))  // so why we write greet. inside console.log 

//---------------------------------------------------------------------------------

// Function:
//first way to do things
function doSomething(name,marks,age,email){
   console.log(name,marks,age,email)
} 
doSomething("faizan",10,22,"faizan@gmail.com")

//second way to do this
function doSomething(){  // it does not matter if something in parameter or not 
   console.log(arguments,arguments[0])  // argumant(to access all the value) give all the value as object and we can also take value we index
} 
doSomething("faizan",10,22,"faizan@gmail.com")

//a) variable hoisting: if u make function with variable u can not access the function
// a();                           // we can not acces a before var a, a is not a function
// var a = function(){            // function exprection

// }

//b) function hoisting: because u are using "keyword(function)" u can access/call before declaration
// b();                      // it will work
// function b(){

// }

//c) arrow function: because we can add arrow function in var thats why like a)
let c = ()=>{        // so hoisting cant be done

}

// rest parameter:
// function rest(A,B,...C){
//   console.log(A,B,C)
// }
// rest(1,2,3,4,5,6,7,8,9,10)

// required parameter: when u write some parameter but u dont give value in arguments when it will show undefined

// without destructed
// function des(obj){
//   console.log(obj)
//   console.log(obj.name)
//     console.log(obj.age)
// }   
// des({name:"faizan", age:22})  

// with destructuring
// function des({name,age}){
//  console.log(name,age)
// }
// des({name:"faizan", age:22}) 

// default parameter
// function def(a=0,b=0,c=0){
//   console.log(a,b,c)
// }
// def(1,2)

// positional argument
// function fun(a,b,c,d){
//   console.log(a,b,c,d)
// }
// fun(1,2,null,4)  // we need to pass some kind of value in the argument

// spread argument
// function fun(a,b,c,d){
//   console.log(a,b,c,d)
// }
// let arr2 = [1,2,3,4]
// fun(arr2[0],arr2[1],...arr2)   // arr2[0], 1 → a and arr2[1], 2 → b  and ...arr2 it will expands to 1, 2, 3, 4

// nested function: fun inside another fun
// function abcd(){
//   function efgh (){
//     console.log("because of abcd function call efdh will work")
//   }
//   efgh();
// }
// abcd();

// scope chain:
// let a = 10;         //global scope can be use any where in the program
function fun(){
  let b=10;         // can only be use inside fun() function scope
  function fun1(){
    console.log(b)
  }
  fun1()
}
fun()

// IIFE (immediately invoke function expreaction)
// when we no not want other to change in out value like let balance=10; they can go to console and change it to 1000 and we do not want that 
// (function(){
// let bal = 1000;
// })();

// HOF
//1) if a function return a function
function fun(){
  return function(){

  }
}
//2) when a function accept a function as a parameter
// function fun1(a){

// }
// fun1(function(){})   // and this is called callback function

// fcf: functions are treated like normal values (just like numbers or strings).
// if, 1) Be stored in a variable
const greet1 = function () {
  console.log("Hello");
};
greet1();

//2️) Be passed as an argument to another function
function run(fn) {
  fn();
}
run(function () {
  console.log("I am passed as an argument");
});

//3️) Be returned from another function
//If a language allows this → it has First-Class Functions.(above exp)

// pure function: input give same output value

// impure function: bhar wale ki value undar wale ki value se badal de
// let aa = 10;
// function fun2(val){
//   aa = Math.random() + val;
//   console.log(aa)
// }
// fun2(12);

// closuer: ek function jo return kare ek aur function butx2 returning function parent functino ka koi variable use karega.
// all closure is also higher order function
// function fun3(){
//   let bb = 10;
//   return function (){
//     console.log(bb)
//   }
// } 
// let val = fun3();
// a();

// -------------------------------------------------------------------------------------
// ARRAYS:
// only imp:
//a) filters: it take function in its parameter and alwanys return something and it can be any condition, or ture/false etc
// and it does not change the original array , and u need to store the new value in new array
// let arr4 = [1,2,3,4,5,6,7,8]
// let arr5 =arr4.filter(function(val){
//   return val<5;
// })

// iteration over arrays :
// a) for loop
// let arr = [1,2,3,4]
// for(let i=0; i<=3; i++){    // i is the index value
//   console.log(arr[i])
// }

// b) forEach: only take fun in its parameter
let arr = [1,2,3,4]
arr.forEach(function(val){
   console.log(val);
})
