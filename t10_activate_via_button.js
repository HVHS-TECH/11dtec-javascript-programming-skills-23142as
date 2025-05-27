/**************************** 
 Name of task: Intro to Javascript
 Person who wrote it: Adarsh 
 Date written: 4/29/2025
 Purpose: Introduction to Javascript and how it works
 ****************************/
console.log("Yuvi is the rizzler and has the huz now😁👍👌😘😘");

//Variables 


/****************************
 Main code 
****************************/
getFavColour();
getFavAge();



/****************************
 Functions
****************************/
function getFavColour () {
userFavColour = prompt("What is your name?")
alert("Your name is: " + userFavColour)
}

function getFavAge () {
userFavAge = prompt("What is your age?")
alert("Your age is: " + userFavAge)
}

 clientMoney = prompt(" how much pocket money do you have?");

if (clientMoney < 4){
  alert("Your pocket money is " +clientMoney+ " dollars.\n Sorry you CAN'T afford a chocolate bar")
} else { 
alert("Your pocket money is " +clientMoney+ " dollars.\n You can afford a chocolate bar")

}