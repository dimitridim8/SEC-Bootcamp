// Objects
// Key-value pairs in curly braces
const myObj = {name: "Dimitri"}
console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea"
  },
  action: function() {
    return `Time for ${this.beverage.morning}`;
  }
};
console.log(anotherObj.beverage.morning)
console.log(anotherObj.action());


const vehicle = {
  wheels: 4,
  engine: function() {
    return "Vrrooom!";
  }
}

/*const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck.wheels); //Inheritance
console.log(truck.engine());*/

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whoooosh!";
};
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function() {
  return "Shhhh....";
};
console.log(tesla.engine());


const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
};

/*delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}!`);
}*/

// destructuring objects
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

const { vocals, guitar, bass, drums} = band;
console.log(myVariable);
console.log(vocals);

function sings({vocals}) {
  return `${vocals} sings!`
};
console.log(sings(band));