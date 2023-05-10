/* Node.js Promisify Method */

const fs = require("fs"); // File system
const promisify = require("util"); // Node.js Promisify utility

const writeFile = promisify(fs.writeFile);

writeFile("example.txt", "This is a sample file.")
  .then(() => console.log("File successfully created."))
  .catch((error) => console.log("Error creating file."));

const delay = (seconds, callback) => {
  if (seconds > 3) {
    callback(new Error(`${seconds} seconds it too long!`));
  } else {
    setTimeout(
      () => callback(null, `the ${seconds} second delay is over.`),
      seconds
    );
  }
};

const promiseDelay = promisify(delay);

promiseDelay(2)
  .then(console.log)
  .catch((error) => console.log(`Error: ${error.message}`));

/*
delay(2, (error, message) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(message);
  }
});
*/
