// Conditonals: If Statements

let customerIsBanned = false;
let soup = "chicken noodle soup";
let reply;
let crackers = true;
if (customerIsBanned) {
  reply = "No soup for you!";
}
else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers.`;
}
else if (soup) {
  reply = `Here's your order of ${soup}`;
}
else {
  reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);


let testScore = 99;
let grade;
let collegeStudent = true;

if(testScore >= 90) {
  grade = "A";
}
else if (testScore >= 80){
  grade = "B"
}
else if (testScore >= 70){
  grade = "C"
}
else if (testScore >= 60){
  grade = "D"
}
else {
  if (collegeStudent) {
    grade = "U";
  }
  else {
    grade = "F"
  }
}
console.log(grade);


// Decision tree!
let playerOne = "rock";
let computer = "rock";

if (playerOne === computer) {
  // tie game!
}
else if (playerOne === "rock"){
  if (computer === "paper") {
    //computer wins
  }
  else {
    //playerOne wins
  }
}
else if (playerOne === "paper"){
  if (computer === "scissors") {
    //computer wins
  }
  else {
    //playerOne wins
  }
}
else if (playerOne === "scissors"){
  if (computer === "rock") {
    //computer wins
  }
  else {
    //playerOne wins
  }
}



// Conditionals: Switch Statements

switch(Math.floor(Math.random() * 5 + 1)) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 3:
    console.log(3);
    break;

  default:
    console.log("No match");
    
}


switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    }
    else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    }
    else {
      console.log("playerOne wins!");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins!");
    }
    else {
      console.log("playerOne wins!");
    }
    break;
}



// Conditionals: Ternary Operator

//syntax
//consition? ifTrue : ifFalse;

let response = soup ? "Yes, we have soup." : "Sorry, no soup today."
console.log(response);
let isCustomerBanned = false;
let soupAccess = isCustomerBanned 
  ? "Sorry, no soup for you!" 
  : soup
  ? `Yes, we have ${soup} today.`
  : "Sorry, no soup today.";
console.log(soupAccess);


let myGrade = 
testScore > 89 
  ? 'A'
  : testScore > 79
  ? 'B'
  : testScore > 69
  ? 'C'
  : testScore > 59
  ? 'D'
  : 'F';
console.log(`My test grade is a ${myGrade}.`)


let result = 
playerOne === computer 
  ? 'Tie game!' 
  : playerOne === "rock" && computer === 'paper'
  ? "Computer wins!"
  : playerOne === "paper" && computer === "scissors"
  ? "Computer wins!"
  : playerOne === "scisssors" && computer === "rock"
  ? "Computer wins!"
  : "playerOne wins!";
console.log(result);
