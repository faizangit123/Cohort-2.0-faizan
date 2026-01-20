// Note: when we write something in prompt is alwaysx2 give you string even if u write a number in the pop up prompt
// and to take number we have to use one of the 3 ways like parsint, Number, +.
// let num = +prompt("Enter your number")  
// "<--leading spaces-->Faizan<--Trailing spaces-->" and we can use .trim (which only use to trim stating and ending spaces it can not trim spce between words or char).
// now i can try to find excptional errors like when we write promopt and then use can click cancel or just spaces then ok or just ok without writing anything

//-----------------------------------------------------------------------------------

// Level 1 – Pure Beginner Practice
// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Enter your age:");
// if (age == null){
//   console.error("You have clicked cancel without entering your age")
// }
// else{
//   age = age.trim();
//   if(age==""){
//     console.error("You just enter space then click ok")
//   }
//   else if(!/^\d+$/.test(age)){                      // this is regex it means the input must contain only digits
//     console.warn("You can only write a valid number ")
//   }
//   else{
//      age = Number(age.trim());
//      if (age===0){
//        console.error("You need to write a valid age")
//      }
//      else if (age > 150) {
//       console.error("Your age must be between 1 and 150");
//     }
//     else if(age>=18)
//       console.log(`${age}, you are eligible to vote`)
//       else {
//       console.log("You are not eligible")
//     }
//     }
// }

// --------------------------------------------------------------------------


// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i = 1; i<=10; i++)
// console.log(`5x${i}=${5*i}`)

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.


// for(let i = 1; i<=15; i++)
//   if(i>8){console.log(`${i}`)}

// let count = 0
// for(let i =1; i<=15; i++)
//   if(i>8){
//     count++
//   }
// console.log(count)


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// const password = "faizan123"
// const pass = prompt("Enter your password:")
// if(pass === null){
//   console.error("You clicked cancel")
// }
// else{
//   if(pass.trim() === ""){
//     console.error("Empty")
//   }
     
//   else if(pass == password){
//       console.log("correct password")
//     } else{
//       console.warn("incorrect password")
//     }
  
// }

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
 
// const openpassword = "open"
// let attempts = 0
// let accountopen = false;
// while(attempts < 3){               // while(password !== openpassword) this code will run until u give the password
//   let pass = prompt("Enter your password:")
//   if(pass === null){
//     console.error("You have clicked cancel")
//     break;
//   }
//   attempts++;
//   if(pass === openpassword){
//     accountopen = true;
//     break;
//   }
//   else{
//     console.warn(`wrong password, your attempts left: ${3 - attempts}`)
//   }
// }
// if (accountopen === true){
//   console.log("You have open your account")
// } else if(attempts === 3) {
//   console.error("Account locked")
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let word = prompt("Enter a word:")
// let count = 0;
// while(word !== "stop"){
//   if(word === "yes")
//     count++;
//   word = prompt("enter a word")
// } 
// console.log(`total no of counts yes:${count}`)

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for(let i=1; i<=50; i++){
  if(i%7 === 0)
    console.log(`that number:${i}`)
}

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0
// for(let i=1; i<=30; i++){
//   if(i%2 !== 0)
//     sum = sum + i;
// }
// console.log(`Total sum = ${sum}`)

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = +prompt("Enter a number")
// while(num%2 !== 0){
//   num = +prompt("Enter a number")
// }
// if(num%2==0){
//   console.log(num)
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = +prompt("Enter your start number")
// let end = +prompt("Enter your end number")
// if(start>end){
//   console.error("Start can not be bigger then end")
// }
// for(let i=start; i<=end; i++){
//   console.log(`Your number${i}`)
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let counter = 0;
// for(let i=1; i<=20; i++){
//   if(counter===3)
//     break;
//   if(i%2!==0){
//     console.log(i)
//     counter++
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let counter = 0
// for(let i=1; i<=5; i++){
//   let num = +prompt("Enter your num")
//   if(num>=0){
//     counter++
//   }
// }
//  console.log(`thats how many time u enter +ve value: ${counter}`)

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000
let counter = 0
let flag = false;
console.log(`Your initial amount: ${balance}`)
while(balance>0 && counter !==3){
  // let amount = +prompt("Amount you want to take: ")
  counter++;
  if(amount<=balance)
  balance -= amount;
else{
  flag=true
    break;
}
}
if(flag === true){
  console.log("Insufficient balance")
}
console.log(`Your Current balance: ${balance}`)



