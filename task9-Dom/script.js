//Dom- Start 
// Counter-> can increase and decrease the value

let h2 = document.querySelector("h2")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

let a = 0;

btn1.addEventListener("click", function(){
  a++
  h2.innerHTML = a;
})
btn2.addEventListener("click", function(){
  a--
  h2.innerHTML = a;
})