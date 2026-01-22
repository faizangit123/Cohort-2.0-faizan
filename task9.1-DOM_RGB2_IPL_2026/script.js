let h2 = document.querySelector("h2")
let btn = document.querySelector("button")
let box = document.querySelector("#box")

btn.addEventListener("click", function () {
    h2.style.visibility = "visible"
})

const ipl2026Teams = [{
        name: "k k r",
        fullname: "Kolkata Knight Riders",
        captain: "Shreyas Iyer",
        trophies: 2,
        prime: "purple",
        secondary: "gold"
    },
    {
        name: "m i",
        fullname: "Mumbai Indians",
        captain: "Hardik Pandya",
        trophies: 5,
        prime: "blue",
        secondary: "gold"
    },
    {
        name: "c s k",
        fullname: "Chennai Super Kings",
        captain: "Ruturaj Gaikwad",
        trophies: 5,
        prime: "yellow",
        secondary: "blue"
    },
    {
        name: "r c b",
        fullname: "Royal Challengers Bengaluru",
        captain: "Faf du Plessis",
        trophies: 0,
        prime: "red",
        secondary: "black"
    },
    {
        name: "r r",
        fullname: "Rajasthan Royals",
        captain: "Sanju Samson",
        trophies: 1,
        prime: "pink",
        secondary: "blue"
    },
    {
        name: "s r h",
        fullname: "Sunrisers Hyderabad",
        captain: "Pat Cummins",
        trophies: 1,
        prime: "orange",
        secondary: "black"
    },
    {
        name: "d c",
        fullname: "Delhi Capitals",
        captain: "Rishabh Pant",
        trophies: 0,
        prime: "blue",
        secondary: "red"
    },
    {
        name: "l s g",
        fullname: "Lucknow Super Giants",
        captain: "KL Rahul",
        trophies: 0,
        prime: "light blue",
        secondary: "orange"
    },
    {
        name: "g t",
        fullname: "Gujarat Titans",
        captain: "Shubman Gill",
        trophies: 1,
        prime: "dark blue",
        secondary: "gold"
    },
    {
        name: "p b k s",
        fullname: "Punjab Kings",
        captain: "Shikhar Dhawan",
        trophies: 0,
        prime: "red",
        secondary: "silver"
    }
];


btn.addEventListener("click", function () {
    let winner = Math.floor(Math.random() * ipl2026Teams.length)
    console.info(ipl2026Teams[winner])
    box.style.backgroundColor = ipl2026Teams[winner].prime
    // body.style.backgroundColor = ipl2026Teams[winner].secondary
    box.innerHTML = ipl2026Teams[winner].name.toUpperCase()
})



