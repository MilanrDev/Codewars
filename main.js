// you will need three parameters
// return values if

// Period
function periodIsLate(last, today, cycleLength){
let dayDifference = (today.getTime() - last.getTime())/(1000*60*60*24)
if (dayDifference > cycleLength){
  return true;
}
 else{
return false;
}alert(40)
 }

// function 1-Hello world
 // Write a function "greet" that returns "hello world!"
 function greet(){
   return('hello world!')
 }

 // Function 3 - multiplying two numbers
 function multiply (num1, num2){
   let multiplyTwoNum = (2,3)
   return num1 * num2
 }


// Grasshopper - Function syntax debugging
 function main (verb, noun){
  return verb + noun
}

// Grasshopper - Variable Assignment Debug
var a = "dev"
var b ="Lab"

var name = a + b
