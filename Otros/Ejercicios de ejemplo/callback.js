function myCallback(message) {
    console.log(message);
}

function welcome(name, myCallback) {
    const message = `Welcome ${name}`;
    myCallback(message);
}

welcome('Antonio', myCallback);