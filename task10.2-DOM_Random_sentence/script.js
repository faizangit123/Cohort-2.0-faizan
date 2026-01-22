var btn = document.querySelector('button')
var main = document.querySelector('main')

var sentences = [
  "Goku was not made in one day",
  "There is no tomorrow",
  "Your comfort zone is your enemy",
  "Mindset is everything",
  "Discipline beats motivation",
  "Weak days create strong minds",
  "No excuses. Just results.",
  "Consistency builds legends",
  "Train your mind like your body",
  "Pressure creates diamonds",
  "Focus is a superpower",
  "Dreams don’t work unless you do",
  "Level up every single day",
  "Pain is temporary. Growth is permanent.",
  "Stay hungry. Stay dangerous.",
  "You are your only limit"
];


btn.addEventListener("click", () => {
  var div = document.createElement('div')

  var x = Math.random() * 80
  var y = Math.random() * 80
  var z = Math.random() * 360
  var scl = Math.random()*6
  var a = Math.floor(Math.random() * sentences.length)

  div.innerText = sentences[a]

  div.style.position = 'absolute'
  div.style.color = 'white'
  div.style.left = x + '%'
  div.style.top = y + '%'
  div.style.rotate = z + 'deg'
  div.style.scale = scl


  main.appendChild(div)
})