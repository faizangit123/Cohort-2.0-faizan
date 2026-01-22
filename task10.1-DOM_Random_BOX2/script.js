const btn = document.querySelector("button");
const main = document.querySelector("main");

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return `rgb(${Math.floor(getRandom(0, 256))},${Math.floor(getRandom(0, 256))},${Math.floor(getRandom(0, 256))})`;
  
}


btn.addEventListener("click",function createRandomBox() {
  var box = document.createElement("div");

  var size = getRandom(40, 100);
  var x = getRandom(0, 90);
  var y = getRandom(0, 90);
  var rotate = getRandom(0, 360);

  box.style.height = `${size}px`;
  box.style.width = `${size}px`;
  box.style.position = "absolute";
  box.style.left = `${x}%`;
  box.style.top = `${y}%`;
  box.style.background = getRandomColor();
  box.style.borderRadius = `${getRandom(0, 50)}%`;
  box.style.transform = `rotate(${rotate}deg) scale(0)`;
  box.style.transition = "all 0.6s ease";
  box.style.cursor = "pointer";
  console.log(box)
  main.appendChild(box);
  
  requestAnimationFrame(function() {
    box.style.transform = `rotate(${rotate}deg) scale(1)`;
  });
  
  box.addEventListener("click", function() {
    box.style.transform = "scale(0)";
    setTimeout(function(){ box.remove()}, 400);
  });

  
  setTimeout(function() {
    box.style.opacity = "0";
    setTimeout(function(){ box.remove()}, 600);
    }, 5000); 
})


