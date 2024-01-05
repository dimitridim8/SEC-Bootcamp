// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: Window

//We do not have to type window. It is implied:

/*window.alert("ok!");
alert("ok!");*/

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
  name: "Dimitri",
  hobbies: ['eat', 'sleep', 'code'],
  logName: function() {
    console.log(this.name);
  }
}

localStorage.setItem("mySessionStore", JSON.stringify(myArray));
//localStorage.removeItem("myLocalStore");
//localStorage.clear();
//const key = localStorage.key(0);
const key = localStorage.length;
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));

//console.log(mySessionData);
console.log(key);
