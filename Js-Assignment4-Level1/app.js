// Level 1 – Basic Function, Array & Object Code
// Tasks (Easy):-
// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function sayHello(){
//   console.log("Hello JavaScript")
// }
// sayHello()

// 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a, b){
//    return a+b;   
// }
// let sum = add(1,2)
// console.log(sum)

// 3. Write a function with a default parameter `name =
// "Guest"` that prints `"Hi <name>"`.

// function hello(name="Guest"){
//   console.log(`Hi ${name}`)
// }
// hello("faizan")

// 4. Use rest parameters to make a function that adds unlimited numbers.

// function unlimited(...rest){
//   console.log(rest)
// }
// unlimited(1,2,3,4,5)

//or 

// function unlimited1(...nums){
//   nums.forEach(function(val){
//     console.log(`This is simple just print all the argments: ${val}`)
//   })
// }
// unlimited1(1,2,3,4,5)

//or

// function unlimited2(...nums){
//    let sum =0;
//    nums.forEach(function(val){
//     sum += val
//    })
//   console.log(`This is forEach sum: ${sum}`)
// }
// unlimited2(1,2,3,4,5)

//or

// function unlimited3(...nums){
//    let sum =0;
//    for(let i=0; i<nums.length; i++){
//     sum += nums[i];
//    }
//    console.log(`By for loop sum: ${sum}`)
//   }
// unlimited3(1,2,3,4,5)

//or

// function unlimited4(...nums){
//    let sum = nums.reduce(function(acc,val){
//     return acc + val;                      // acc is the container and the first val is 0 (like sum look above and val take 1)
//    },0)
//    console.log(`By reduce fun sum: ${sum}`) 
//    }
// unlimited4(1,2,3,4,5)

// 5. Create an IIFE that prints `"I run instantly!"`.

// (function(){
//  console.log("I run instantly")
// })()

// 6. Make a nested function where the inner one prints a variable from the outer one.

function outer(){
  let a =10;
   function inner(){
    console.log(a)
  }
  inner()
}
outer()

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let fruits = ["apple", "banana", "mango", "grapes", "orange"];
fruits.push("pear")
fruits.shift();
console.log(fruits)


// 8. Use a `for` loop to print all elements of an array.

let arr = [1,2,3,4,5]
for(let i=0; i<arr.length; i++){
  console.log(arr[i])
}

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

let person ={
    name:"Faizan",
    age:22,
    city:"New Delhi"
}
// for(variable in obj_name)
for(let key in person){
  console.log(key)
  console.log(person[key])
}

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

setTimeout(function(){
  console.log("Time's up!")
},4000)

