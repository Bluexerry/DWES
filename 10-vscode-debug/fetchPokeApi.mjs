// Usamos import() dinámico
async function getPokemon(pokemonName) {

    // Cargamos 'node-fetch' dinámicamente
    const fetch = (await import('node-fetch')).default;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const data = await response.json();
    console.log(`Name: ${data.name}`);
    console.log(`Height: ${data.height}`);
    console.log(`Weight: ${data.weight}`);
    console.log(`Types: ${data.types.map(type => type.type.name).join(', ')}`);
}

getPokemon('pikachu');
