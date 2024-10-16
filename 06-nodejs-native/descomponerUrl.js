// Definimos la función "descomposeUrl", que recibe un argumento "url".
function descomposeUrl(url) {

    // Utilizamos la clase "URL" para convertir la cadena de texto "url" en un objeto URL, 
    // que contiene varias propiedades útiles como el protocolo, hostname, pathname, etc.
    const objUrl = new URL(url);

    // Obtenemos el valor de la ruta de la URL (objUrl.pathname), la cual es una cadena con el camino después del dominio.
    // Usamos ".split()" para dividir la ruta en un array separando por los "/" y ".slice(1)" para quitar el primer elemento vacío.
    const folderTree = objUrl.pathname.split("/").slice(1);

    // Quitamos el último elemento de "folderTree" que normalmente representa el archivo objetivo o final de la URL.
    const targetFile = folderTree.pop();

    // Mostramos en la consola el objeto URL completo, útil para depuración.
    console.log(objUrl);

    // Devolvemos un objeto con las siguientes propiedades:
    return {
        // "protocol" obtiene el protocolo (http, https, etc.) quitando los dos puntos finales con ".slice(0, -1)".
        protocol: objUrl.protocol.slice(0, -1),

        // "ipAdress" se deja como null, no se resuelve en este código (se podría implementar usando DNS lookup).
        ipAdress: null,

        // "subDomain" se establece como "www" de manera predeterminada, no se extrae de la URL en este caso.
        subDomain: "www",

        // "domainName" está configurado de forma estática como "google.com", lo que significa que siempre devolverá ese valor.
        // Para hacerlo dinámico, podrías utilizar "objUrl.hostname" en lugar de escribir "google.com" directamente.
        domainName: "google.com",

        // "folderTree" contiene las carpetas de la ruta de la URL (array de strings) antes del archivo final.
        folderTree,

        // "targetFile" es el archivo o recurso final en la ruta de la URL.
        targetFile,

        // "argumentsFile" obtiene la parte de los parámetros de la URL (la parte después del "?"), 
        // en este caso "ok=1", usando "objUrl.search".
        argumentsFile: objUrl.search
    }
}

// Llamamos a la función "descomposeUrl" con un ejemplo de URL y procesamos su estructura.
descomposeUrl("https://www.google.com/search/test.js?ok=1");
