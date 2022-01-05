const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout
const myEmitter = new EventEmitter();

setImmediate(() => {
    myEmitter.emit("TEST_EVENT");
});

myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT is fired");
});

myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT is fired");
});

myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT is fired");
});
