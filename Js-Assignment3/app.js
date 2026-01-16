// Note: when we write something in prompt is alwaysx2 give you string even if u write a number in the pop up prompt
// and to take number we have to use one of the 3 ways like parsint, Number, +.
// let num = +prompt("Enter your number")  
// "<--leading spaces-->Faizan<--Trailing spaces-->" and we can use .trim (which only use to trim stating and ending spaces it can not trim spce between words or char).
// now i can try to find excptional errors like when we write promopt and then use can click cancel or just spaces then ok or just ok without writing anything
let age = prompt("Enter your age:")
if (age == null){
  console.error("You have clicked cancel without entering your age")
}
else{
  age = age.trim();
  if(age==""){
    console.error("You just enter space then click ok")
  }
  else if(!/^\d+$/.test(age)){
    console.warn("You need enter a valid number")
  }

  else{
    // age = Number(age.trim());
    // if(isNaN(age)){
    //   console.error("You have entered a string")
    // }
    if(age>=18)
      console.log(`${age} you are eligible to vote`)
      else {
      console.log("You are not eligible")
    }
    }
}