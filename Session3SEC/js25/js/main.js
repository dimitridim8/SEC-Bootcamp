// Higher Order Functions

// A higher order fucntion is a function that does at least one of the following:
// ** Takes one or more fucntions as an argument (parameter)
// ** Returns a function as the result

//forEach()

import { posts } from "./posts.js";

posts.forEach((post) => {
  console.log(post);
})
console.clear();

const filteredPosts = posts.filter(post => {
  return post.userId === 10;
})
console.log(filteredPosts);

const mappedPosts = filteredPosts.map(post => {
  return post.id * 10;
})
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
})
console.log(reducedPostsValue)