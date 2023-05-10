var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    if (seconds > 3) {
      rejects(new Error(`The number ${seconds} is too high.`));
    }

    // throw new Error("Error!");

    setTimeout(() => {
      resolves("The long delay has ended.");
    }, time);
  });

delay(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello, World! ${number}`))
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

console.log("End first tick.");
