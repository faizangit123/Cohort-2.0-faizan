// All of this also called : Tracing loops.
// const numbers1 = [10, 25, 7, 40, 18];

// let largest1 = numbers1[0];

// for (let i = 1; i < numbers1.length; i++) {
//   if (numbers1[i] > largest1) {
//     largest1 = numbers1[i];
//   }
// }
// console.log(largest1);

// (1) Find the largest number using a loop.
// const numbers2 = [8, 15, 3, 22, 7, 19];
// let largest2 = numbers2[0];
// for (let i = 1; i < numbers2.length; i++) {
//   if (numbers2[i] > largest2) {
//     largest2 = numbers2[i];
//   }
// }
// console.log(largest2);

// (2) Find the smallest number using a loop.
// const numbers3 = [8, 15, 3, 22, 7, 19];
// let smallest = numbers3[0];
// for (let i = 1; i < numbers3.length; i++) {
//   if (numbers3[i] < smallest) {
//     smallest = numbers3[i];
//   }
// }
// console.log(smallest);

// (3) Calculate the sum of all numbers using a loop.
// const numbers4 = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < numbers4.length; i++) {
//   sum = sum + numbers4[i]; // 0 = 0 + 10, 10 = 10 +20
//   total = sum
// }
// console.log(sum)

// (4) Print every element using a loop.

// const numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
//This is called traversing an array.

// Sum of array
// const number = [10, 20, 30, 40, 50];

// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   //This pattern is called accumulation:
//   sum += number[i];
// }
// console.log(sum);

// map()
// const numbers = [1, 2, 3, 4];

// const result = numbers.map((num) => {
//   return num * 2;
// });
// console.log(numbers); // orignal array
// console.log(result); // new array

// short hand version : numbers.map(num => num * 2);

// prints only the even numbers:
// const numbers = [10, 21, 33, 40, 52, 67, 80];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// Find whether 40 exists in the array.
// const numbers = [10, 25, 7, 40, 18, 30];

// let found = false;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 50) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   console.log("40 found");
// } else {
//   console.log("40 not found");
// }

// searches for a number stored in a variable:

// const numbers = [10, 25, 7, 40, 18, 30];
// let foundIndex = -1;
// let found = false;
// const target = 18;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === target) {
//     found = true;
//     foundIndex = i;
//     break;}}
// if (found) {
//   console.log(`${target} found at index ${foundIndex}`);
// }
// else{
//   console.log(`${target} not found`)
// }

// Find all indexes where 40 occurs.
// const numbers = [10, 25, 7, 40, 18, 30, 40, 5];
// const target = 40;
// let found = false;
// let foundIndex = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === target) {
//     found = true;
//     foundIndex.push(i)
//   }
// }
// if (found) {
//   console.log(`${target} found at index ${foundIndex}`);
// } else {
//   console.log(`${target} not found`);
// }

// count how many times 10 appears.

// const numbers = [10, 20, 10, 30, 40, 10, 50];
// const target = 10;

// let count = 0;
// for(let i=0; i<numbers.length; i++){
//   if(numbers[i] === target){
//     count++
//   }
// }
// console.log(count)

// DSA Lesson 2 : Finding the second largest

// const numbers = [10, 25, 7, 10, 18, 60];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for(let i=0; i<numbers.length; i++){
//   if(numbers[i]>largest){
//     secondLargest = largest // Before changing largest, we need to save the old largest:
//     largest = numbers[i];
//   }
//   else if(numbers[i]>secondLargest){
//     secondLargest = numbers[i]
//   }
// }
// console.log(largest)
// console.log(secondLargest)

const num = [10,24, 7, 10, 18,6];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i<num.length; i++){
  if(num[i]>largest){
    secondLargest = largest;
    largest = num[i];
  }
  else if(num[i]>secondLargest){
    secondLargest = num[i];
  }
}
console.log(largest)
console.log(secondLargest)



const numbers = [10, 20, 10, 30, 40, 10, 50];
const target = 10;

let count = 0;
for(let i=0; i<numbers.length; i++){
  if(numbers[i] === target){
    count++
  }
}
console.log(count)