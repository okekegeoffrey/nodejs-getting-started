const message = timeDelay => {
    console.log("Hello after " + timeDelay + " seconds");
};

setTimeout(message, 4 * 1000, 4);

setTimeout(message, 8 * 1000, 8);