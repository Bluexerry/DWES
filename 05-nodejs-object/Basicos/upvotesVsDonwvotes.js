// Definimos una función llamada getVoteCount que toma un objeto 'votes' como argumento
function getVoteCount(votes) {
    // La función devuelve la diferencia entre los upvotes (votos positivos) y downvotes (votos negativos)
    return votes.upvotes - votes.downvotes;
}

// Llamamos a la función con un objeto que tiene 13 upvotes y 0 downvotes
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
