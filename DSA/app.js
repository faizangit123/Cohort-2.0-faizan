const prompt = require("prompt-sync")();

// const a = 10;
// console.log(a);

// operators:
// let a = 5;
// a += 3*2
// console.log(a)

// let x = 50;
// x /= 5-2;
// console.log(x)

// let y = 7;
// y +=2
// y *=3
// y -=4
// y %=5
// console.log(y)

// let x = 4;
// x +=2*3
// console.log(x)


// let y = 45;
// y /= 4;
// console.log(y)

// Math()

// let P = prompt("Enter your initial Amount: ")
// let R = prompt("Enter your Interest Rate: ")
// let T = prompt("Enter your Time duraction: ")

// let A = P*(Math.pow(1 - R/100),T)- P;
// let CI = A - P;
// console.log(CI.toFixed(2))

// Generate OTP:  

let otp = Math.trunc((Math.random() * 9000) + 1000)
console.log(`Your OTP is: ${otp}`)

console.log(Math.max(-10, -5))


//conditional statement

// let n = +prompt("Enter your Number: ")
// if(n%2==0){
//   console.log("even")
// }
// else console.log("odd")


// let num1 = +prompt("Enter your first number: ")
// let num2 = +prompt("Enter your second number: ")

// if (num1 > num2) {
//   console.log(`${num1} is grater then ${num2}`)
// } else {
//   console.log(`${num2} is grater then ${num1}`)
// }

// let name = prompt("Enter your name: ")
// let age = +prompt("Enter your age: ")
// if (age >= 18) {
//   console.log("Valid")

// } else {
//   console.log("Invalid")
// }

// let a = +prompt("Enter your first number: ")
// let b = +prompt("Enter your 2rd number: ")
// let c = +prompt("Enter your 3rd number: ")

// if(a>b && a>c){
//   console.log("A is grater then B and C")
// }
// else if(b>a && b>c){
//   console.log("B is grater then A and C")
// }
// else if(c>a && c>b){
//   console.log("C is grater then A and B")
// }

// Leap year:
// let year = +prompt("Enter a year: ")

// if(year%400==0 || year%4==0 && year%100!== 0){
//   console.log(`${year}, is a leap year`)
// } else {
//   console.log("not a leap year")
// }

// Discount:
// let amount = +prompt("Enter your amount: ")
// if(amount>0 && amount<=5000){
//   console.log(`${amount}, no discount, it should be above rs.5000`)
// }
// else if(amount>5000 && amount<=7000){  
//   console.log(`${amount-(5*amount)/100}, you will get 5% discount`)     // discount : dis*amount/100
// }
// else if(amount>7000 && amount<=9000){
//   console.log(`${amount-(10*amount)/100}, you will get 10% discount`)
// }

// unit:
// let unit = +prompt("Enter your unit:");
// let amount = 0;

// if (unit > 0 && unit <= 100) {
//   amount = unit * 4.2;
// }
// else if (unit > 100 && unit <= 200) {
//   amount = (100 * 4.2) + (unit - 100) * 6;
// }
// else if (unit > 200 && unit <= 400) {
//   amount = (100 * 4.2) + (100 * 6) + (unit - 200) * 8;
// }
// else if (unit > 400) {
//   amount =(100 * 4.2) +(100 * 6) +(200 * 8) +(unit - 400) * 13;
// }
// else {
//   console.log("Invalid unit");
// }
// console.log(`Total amount: Rs. ${amount}`);

// how many days in a month:

// let month = +prompt("Enter a month: ")
// let year = +prompt("Enter a year: ")
// let days = 0
// if (month == 2) {
//   if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
//     days = 29;
//   } else {
//     days = 28;
//   }
// } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//   days = 31;
// } else days = 30;
// console.log(`${days} days`)

// Vowel and consonent:

// let word= prompt("Write a word: ")
// let Vowel = 0,  consonent = 0;

// for(let i=0; i<word.length; i++){
//   let ch = word.charAt(i)
//   switch(ch){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u": Vowel++;
//     break;
//     default : consonent++;  }
// }
// console.log("consonent: "+consonent)
// console.log("Vowels: "+Vowel)

// area  tringle, square and rectange
console.log("Enter 1 to find area of Rectange: ")
console.log("Enter 2 to find area of Square: ")
console.log("Enter 3 to find area of trinage: ")
let n = +prompt()
switch (n) {
  case 1:
    let length = +prompt("Enter length: ")
    let breath = +prompt("Enter breath: ")
          console.log(length*breath);
    break;
  case 2:
    let side = +prompt("Enter side to find square area: ")
    console.log(side*side)
    break;
  case 3:
    let height = +prompt("Enter height: ")
    let base = +prompt("Enter base: ")
    console.log((height*base)/2);
    break
  default:
    console.log("Invalid value");
    break;
}