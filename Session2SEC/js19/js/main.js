// JavaScript Errors and Error Handling
"use strict";
const variable = "Dimitri";
console.log(variable);

//Object..create();
/*const name = "Dimitri";
name = "Joe";*/

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      //throw new customError("This is a custom error!");
      //throw new Error("This is a custom error!");
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even Number!");
    } catch(err) {
      //console.error(err);
      //console.warn(err);
      //console.error(err.name);
      //console.error(err.message);
      console.error(err.stack);
    } finally {
      console.log("...finally")
      i++;
    }
  }
};
makeError();

/*function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}*/