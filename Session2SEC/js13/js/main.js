// Functions

// Methods = Built-in Functions

"Dimitri".toLowerCase();
Math.random();

function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num2;
  }
  return num1 + num2;
}

console.log(sum(5, 10));

/*function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"))
console.log(getUserNameFromEmail("user@GiHub.com"))*/

/*const getUserNameFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("dave@davesdomain.com"))*/

const getUserNameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("dave@davesdomain.com"))


const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("dImItRi"));