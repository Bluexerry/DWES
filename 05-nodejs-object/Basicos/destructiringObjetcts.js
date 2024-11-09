// Declaramos un objeto 'user' con varios atributos
const user = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" };

// Desestructuramos el objeto 'user' para obtener solo las propiedades 'name' y 'email'
const { name, email } = user;

// Mostramos en consola el nombre del usuario y su email utilizando template literals
console.log(`${name} tiene ${email}`); // Esto imprimirá: "John tiene john@example.com"

// Aquí estamos creando una cadena que intenta desestructurar el objeto 'user' y convertirlo a string
// Sin embargo, esto no se ejecuta correctamente, ya que no es una sintaxis válida
const str = `({ name, email, ...rest} = user ).toString()`;
