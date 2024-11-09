// Definimos la URL de donde obtendremos la lista de usuarios (API de prueba jsonplaceholder).
const url = 'https://jsonplaceholder.typicode.com/users';

// Creamos una función asíncrona llamada "obtenerUsuarios" para manejar la solicitud HTTP.
async function obtenerUsuarios() {
    try {
        // Usamos "fetch" para hacer la solicitud a la URL. 
        // "await" espera hasta que la promesa se resuelva y obtengamos la respuesta.
        const response = await fetch(url);

        // Verificamos si la respuesta fue exitosa (código de estado entre 200 y 299).
        // Si no es así, lanzamos un error personalizado con el código de estado y mensaje.
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        // Convertimos la respuesta a JSON. Usamos "await" ya que también devuelve una promesa.
        const usuarios = await response.json();

        // Verificamos si el array de usuarios está vacío.
        if (usuarios.length === 0) {
            // Si no hay usuarios, mostramos un mensaje en la consola y detenemos la ejecución con "return".
            console.log('No se encontraron usuarios.');
            return; // Salimos de la función si no hay usuarios.
        }

        // Si hay usuarios, mostramos el nombre del primer usuario en el array.
        console.log(`El nombre del primer usuario es: ${usuarios[0].name}`);
    } catch (error) {
        // Si ocurre cualquier error durante el proceso, ya sea en la solicitud o en el manejo de los datos,
        // mostramos un mensaje de error en la consola con detalles del problema.
        console.error(`Hubo un problema con la solicitud Fetch: ${error.message}`);
    }
}

// Llamamos a la función "obtenerUsuarios" para que realice la solicitud y maneje los datos.
obtenerUsuarios();
