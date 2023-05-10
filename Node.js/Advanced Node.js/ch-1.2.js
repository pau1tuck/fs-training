/* Resolving Promises */

// Callback
const delay_1 = (seconds, callback) => {
  setTimeout(callback, seconds * 1000);
};

// Promise chain
const delay_2 = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(() => {
      resolves("The long delay has ended.");
    }, seconds * 1000);
  });

// delay(1).then((message) => console.log(message));
delay(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello, World! ${number}`));

console.log("The first tick has ended.");
