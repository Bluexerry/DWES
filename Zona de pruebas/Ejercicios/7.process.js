//Process es un objeto global que proporciona información y control sobre el proceso de Node.js.
// Como objeto global, siempre está disponible para Node.js, por lo que no es necesario usar require().

//Argumentos de entrada
console.log(process.argv);


//Controlar el proceso y su salida
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
    //Limpiar los recursos
});

//Current working directory
console.log('\n' + process.cwd() + '\n');

//Plataforma
console.log(process.platform);