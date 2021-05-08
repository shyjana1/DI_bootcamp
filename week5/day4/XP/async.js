/*
Working With Async Keyword
*/
//
// function simpleAsync() {
//   return new Promise((res, rej) => {
//     res("1")
//   })
// }
// console.log(simpleAsync());

// // Returning Promises with Async Keyword
// const simpleAsync = async () => {
//   return 1;
// }
// simpleAsync()
//   .then(data => {
//     console.log(data);
//   })

// extract value from promise .then
// simpleAsync()
// .then(res => {
//   console.log(res);
// })


// Understanding Asynchronous Execution
// function returnPromises() {
//   let newPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Promise Executed...");
//       resolve("Sample Data");
//     }, 3000);
//   });
//   return newPromise
// }
// // //
// function ExecuteFunction() {
//   console.log('first');
//   var getPromise =  returnPromises();
//   console.log('second');
//   return getPromise
// }
// // //
// ExecuteFunction()
// .then(res => {
//   console.log(res);
// })

// Adding await before a promise makes the execution thread to wait
// function returnPromises() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Promise Executed...");
//       resolve("Sample Data");
//     }, 8000);
//   });
// }
// //

// async function ExecuteFunction() {
//   console.log('first');
//   var getPromise = await returnPromises();
//   console.log('second');
//   return getPromise;
// }
// ExecuteFunction()
// .then(res => {
//   console.log(res);
// })
// console.log('eytan ask if it is like sync code....');
// console.log('now eytan understood what is goign on....');


// async/await is a feature of JavaScript that allows
// you to write asynchronous code that looks a lot like
// synchronous code, and under the hood,
// it’s powered by JavaScript Promises.

// const anAsyncFunction = async () => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Done awaiting!");
//     }, 3000);
//   });
// };
// //
// console.log(anAsyncFunction());
// anAsyncFunction().then(res => console.log(res));

// 1. async is added to the beginning of the function definition
// 2. Nothing special is done for the return value
// 3. Async functions can use other async functions
// 4. To get the result of another async function,
// use the await keyword — you can only use await
// inside an async function!
// async function name(){
//
// }
// const name = async function(){
//
// }
// const name = async () => {
//
// }

// 1. Wait until all posts are fetched
// 2. When complete, get the first one
// (let’s say sorting by most recent)
// 3. Wait until all comments are fetched
// 4. Wait until all likes are fetched
// Return a value

// const getPosts = (userId) => {
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Post ","Done!");
//     resolve([{ id: 1 }]);
//   }, 1500);
// });

// const getComments = (postId) =>
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("comments ","Done!");
//       resolve([{}, {}]);
//     }, 1500);
// });

// const getLikes = (postId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("likes ", "Done!");
//       resolve(5);
//     }, 2000);
// });

// console.log('1');
// const getLatestPostActivity = async (userId) => {
//   const posts = await getPosts(userId);
//   const latestPost = posts[0];
//   const comments = await getComments(latestPost.id);
//   const likes = await getLikes(latestPost.id);
//
//   return { comments: comments, likes: likes };
// };
//
// getLatestPostActivity(1)
// .then((result) => {
//   console.log("everything ","Done!");
//   console.log(result);
// });
// console.log('2');

// One thing to note is that the argument that follows await
// in the async function must return a Promise!
// That means you can use await with raw Promises as well:
// const setTimeoutPromise = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, milliseconds);
//   });
// };
//
// const waitOnPromise = async () => {
//   console.log("Start...");
//   await setTimeoutPromise(2000);
//   console.log("Done!");
// };
// waitOnPromise();

//Error Handling
//Async function use error throwing and try/catch blocks
//to emulate and handle reject() calls! Here’s an example:
// Async/Await Error Handling
// const callAmazone = async () => {
//   fetch(db)
//   if(db === 'ok'){
//     return 'ok'
//   }
//   else {
//     throw new Error("It didn't work!");
//   }
//   // answer ok/not ok
//
//   console.log('Done!');
// }
// // //
// const main = async () => {
//   try {
//     let res = await callAmazone();
//     console.log(res);
//   }
//   catch(error) {
//     alert('you do not have permition')
//   }
//   finally{
//
//   }
// }
// main();
// console.log('this is for Josh');


// Async/Await In Loops
// WARNING: async/await doesn’t play nicely with .forEach() loops
// async/await plays nicely with for , for : of and while loops

// const timeout = async (milliseconds, id) => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(id," Done!");
//       resolve();
//     }, milliseconds);
//   });
// };

// (async function() {
//   console.log('1'," Done!");
//
//   ["first", "second", "third"].forEach(async (id) => {
//     await timeout(2000, id);
//   });
//
//   console.log('3'," Done!");
// })();

// As you can see, the “before” and “after” finish first,
// followed then by all async functions at the same time,
// which is not what you’re likely going for here.

// (async() => {
//   console.log('1'," Done!");
//
//   for (const item of ["first", "second", "third"]) {
//     await timeout(2000, item);
//   }
//
//   console.log('3'," Done!");
// })();


// Concurrent Await Calls
// Promise.all
// Promise.allSettled
//
// const getPosts = (userId) => new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Post ","Done!");
//     resolve([{ id: 1 }]);
//   }, 1500);
// });
// const getComments = (postId) => new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("comments ","Done!");
//       resolve([{}, {}]);
//     }, 1500);
// });
// const getLikes = (postId) => new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("likes ", "Done!");
//       resolve(5);
//     }, 1500);
// });
// const getLatestPostActivity = async (userId) => {
//   const posts = await getPosts(userId);
//   const latestPost = posts[0];
//   const [comments, likes] = await Promise.all(
//       [getComments(latestPost.id), getLikes(latestPost.id)]);
//
//   return { comments: comments, likes: likes };
// }
// getLatestPostActivity(1)
// .then(res => {
//   console.log('everything ', res);
// })


// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(e => {
//     console.log(e);
//   })

// async function fetchStarship() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }
// fetchStarship()


// const a = async (num) => {
//   try {
//     if (num > 10) {
//       return 'Galit'
//     } else if (num == 10) {
//       return 'Shy'
//     }
//     throw new Error('Eytan');
//   } catch (e) {
//     return e + ' here';
//   }
// }
// a(8)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(e => {
//     console.log(e);
//   })