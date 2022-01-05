// print "Hello World" every second but only 5 times
let counter = 1;

const message = setInterval(() => {
    console.log("Hello World");
    counter++;
    if (counter > 5) {
        console.log("Done");
        clearInterval(message);
    }
}, 1000);
