// 🟡 Level 2 – Functional Thinking & Logic Tasks
// (Intermediate)
// 1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.

function runTwice(fn){
  fn()
  fn()
}
runTwice(function(){
    console.log("Yo")
  })

// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.

function pure(a){
  return a+1;
}
console.log(pure(1))
console.log(pure(1))

let global = 1;
function impure(){
  global++
  console.log(global)
}
impure()
impure()


// 3. Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`.

// without destructed
function des(obj){
  console.log(obj)
  console.log(obj.name)
    console.log(obj.age)
}   
des({name:"faizan", age:22})  

// with destructuring
function des({name,age}){
 console.log(name,age)
}
des({name:"faizan", age:22}) 


// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the `this` issue).

// this is a keyword which is dynamic and its value change all the times

// console.log(this)    // globally this keyword value is window

function abc(){
  console.log(this)    // still the value is window
}
abc()

let obj = {
  name: "faizan",
  fun : function(){
    console.log(this)   // now this value is object why? if u have a object and inside it u have some property and a function which contain this keyword then this will take obj value, means this = obj value
  },
  fun2 : ()=>{
    console.log(this)   // arrow fun will give window value for this keyword because arrow fun only take value from its parent and this is obj which is global and global is window
  }
}
obj.fun()
obj.fun2

let obj2={
  name: "faizan",
  fun3: function(){
    let fun4 = ()=>{       // now arrow fun is taking above fun3 as his parent and his value is obj so arrow value also become obj
      console.log(this)   
    }
  fun4()
  }
}
obj2.fun3()


// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.

// let arr = [1,2,3,4]
// let arr2 = arr.map(function(val){
//     return val*val;
    
// })
// console.log(arr2)

// 6. Use `filter()` to get only even numbers from an
// array.

// let arr = [1,2,3,4,5,6]
// let arr1 = arr.filter(function(val){
//   return val%2 === 0
// })
// console.log(arr1)

// 7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.

// let arr =[1000, 2000, 3000]
// let arr2= arr.reduce(function(acc,val){
//   return acc+val;
// },0)
// console.log(arr2)

// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).

let some = ["arman", "faizna", "Dhruv", "anjali", "om"]
let some1 = some.some(function(val){             // if atleast one is true than true 
// let some2 = some.every(function(val){})       // only when all is true than true
  return val.length> 3
})
console.log(some1)

// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.

let user ={
  name:"faizan",
  age:22,
  email:"faizan@gmail.com"
}
Object.freeze(user);  // now u can not change the value 
user.name = "arman"

Object.seal(user)       // when we use seal we can change the value but we can not add extra value
user.name ="arman2"

// 10. Create a nested object (`user → address → city`) and
// access the city name inside it.

let obj3 = {
    user: {
      name: "faizan",
       address:{
          city: "New delhi"
   }
}
}

let {city} = obj3.user.address
console.log(obj3.user.address.city)














// Note: “Configured GA4 with a focus on understanding web traffic and user behavior for a production-deployed React application.”