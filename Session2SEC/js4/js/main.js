//Numbers

//An integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0151;

const myString = "42";
const myString2 = "42.123abc"

console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
console.log(Number("Dimitri"));
console.log(Number(undefined));

console.log(Number(true));
console.log(Number(false));

// Number Methods
// The Number.isInteger() method determines whether then passed value is an integer
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString2));
// The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(Number.parseFloat(myString2).toFixed(2));
// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat).toFixed(2));
console.log(Number.parseInt(myString2));
// The toString() method returns a string representing the number
console.log(myFloat.toString());

// Chaining = Using several metods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString())

// NaN is an acronym for Not a Number
console.log(Number("Dimitri"));
//The Number.isNaN() method determines whether the passed value is NaN AND its type is Number
console.log(Number.isNaN("Dimitri"));
// Then global isNaN() function determines whether a value is NaN or not
console.log(isNaN("Dimitri"))