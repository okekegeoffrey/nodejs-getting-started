
const greeting = timeout =>
    setTimeout(() => {
        console.log("Hello World. " + timeout);
        greeting(timeout + 1);  // why is timeout++ not producting the same result?
    }, timeout * 1000);


greeting(1);
// const greeting = delay =>
//   setTimeout(() => {
//     console.log('Hello World. ' + delay);
//     greeting(delay + 1);
//   }, delay * 1000);
// greeting(1);