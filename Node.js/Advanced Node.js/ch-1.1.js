/* Asynchronous Callbacks */

function hideString(str, done) {
  // Synchronous direct style:
  // return (str.replace(/[a-zA-Z]/g, "X");

  // Asynchronous continuation passing style:
  process.nextTick(() => {
    return done(str.replace(/[a-zA-Z]/g, "X"));
  });
}

// Callback should be asynchronous
hideString("Hello World", (hidden) => {
  console.log("hidden");
});

console.log(hidden);

/* ---------- */

function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

// Callback Hell:
console.log("Starting delays...");
delay(2, () => {
  console.log("2 seconds");
  delay(3, () => {
    console.log("3 seconds");
  });
});
