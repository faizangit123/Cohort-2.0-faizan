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
/**
 * 
 */

//-----


//(2) Find the smallest number using a loop.
const numbers3 = [8, 15, 3, 22, 7, 19];
let smallest = numbers3[0];
for (let i = 1; i < numbers3.length; i++) {
  if (numbers3[i] < smallest) {
    smallest = numbers3[i];
  }
}
console.log(smallest);