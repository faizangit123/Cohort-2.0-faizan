let box = document.querySelector("#box")
let btn = document.querySelector("button")

btn.addEventListener("click", function () {
  var c1 = Math.floor(Math.random() * 256)
  var c2 = Math.floor(Math.random() * 256)
  var c3 = Math.floor(Math.random() * 256)
  console.info(`${c1},${c2},${c3}`)
  box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})


const arr = [
  "Arman",
  "Faizan",
  "Rahul",
  "Aman",
  "Rohit",
  "Sahil",
  "Ankit",
  "Neha",
  "Priya",
  "Karan",
  "Simran"
];

btn.addEventListener("click", function () {
  var a = Math.floor(Math.random() * arr.length)
  console.info(arr[a])
})
