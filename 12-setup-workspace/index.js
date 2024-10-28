const chalk = require('chalk');

var youShouldNeverUseVar = "This is my very long line that eslint should check as an error ............................................";

function myFunction(used, nonUsed) {
    const rojo = chalk.red('rojo');
    console.log(youShouldNeverUseVar);
    if (used) {
        console.log(used);
        console.log(nonUsed);
        console.log(rojo);
        console.log('used');
        return;

    }
}

module.exports = myFunction;
