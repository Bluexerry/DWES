const chalk = require('chalk');

function myFunction(used, nonUsed) {
    const rojo = chalk.red('rojo');
    console.log(youShouldNeverUseVar);
    if (used) {
        console.log(used);
        console.log(rojo);
        console.log('used');
        return;

    }
}

module.exports = myFunction;