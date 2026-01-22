var btn = document.querySelector('button')
var grow = 0
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener('click',function(){
  btn.style.pointerEvents = "none"
  var num = 50+ Math.floor(Math.random()*50)

  let end = setInterval(function() {
    grow++
    h2.innerHTML = grow + "%"
    inner.style.width = grow + '%'
  },num);

  
setTimeout(() => {
  clearInterval(end)
  btn.innerHTML = "Downloaded"
  btn.style.opacity = 0.5
}, num*100);

console.info("Your Song will be Download in: ",num/10," seconds")

})
