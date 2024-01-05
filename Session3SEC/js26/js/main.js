// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

/*//Callbacks

function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

// AKA "callback hell"
firstFunction(para, function() {
  //do stuff
  secondFunction(para, function() {
    thirdFunction(para, fucntion() {

    })
  })
})*/

// Promises

// 3 states: Pending, Fulfilled, Rejected

/*const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the problem!");
  } else {
    reject("No! rejected the promise.")
  }
});

/*console.log(myPromise);

myPromise.then(value => {
  return value + 1;
})
.then(newValue => {
  console.log(newValue);
})
.catch(err => {
  console.error(err);
})

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() { 
    resolve("myNextPromise resolved!")
  }, 3000);
});

myNextPromise.then(value => {
  console.log(value);
});

myPromise.then(value => {
  console.log(value);
});*/

/*//pending 
const users = fetch("https://jsonplaceholder.typicode.com/users");
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
      console.log(user); 
    })
  })

  console.log(users);*/

/*// Async / Await

const myUsers = {
  userList: []
}

async function myCoolFunction() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const jsonUserData = await response.json();
   return jsonUserData;
}

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
} 

anotherFunc();
console.log(myUsers.userList); */

/*// workflow function

const getAllUserEmails = async () => {

   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const jsonUserData = await response.json();

   const userEmailArray = jsonUserData.map(user => {
    return user.email;
   })

   console.log(userEmailArray);
   postToWebPage(userEmailArray);
}

const postToWebPage = (data => {
  console.log(data);
})

getAllUserEmails(); */

/* // 2nd parameter of Fetch is a object

const jokeObject = {
  id: "cUvsHt41gFd",
  joke: "A man walked in to a bar with some asphalt on his arm. He said “Two beers please, one for me and one for the road.”"
}

const postData = async (jokeObj) => {

  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jokeObj)
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse);
}

postData(jokeObject); */

// abstract into functions

// maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"]
  }
  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {

  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke
  postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
  console.log(joke)
}

// Procedural workflow function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
}

processJokeRequest();