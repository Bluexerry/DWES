const url = 'https://jsonplaceholder.typicode.com/users';

async function obtenerUsuarios() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const usuarios = await response.json();

        if (usuarios.length === 0) {
            console.log('No se encontraron usuarios.');
            return;
        }

        console.log(`El nombre del primer usuario es: ${usuarios[0].name}`);
    } catch (error) {
        console.error(`Hubo un problema con la solicitud Fetch: ${error.message}`);
    }
}

obtenerUsuarios();
