// Definimos la función getStudentsWithNamesAndTopNotes que recibe un array de estudiantes como argumento
function getStudentsWithNamesAndTopNotes(students) {
  // Utilizamos el método map para crear un nuevo array con los elementos modificados
  return students.map((student) => {
    // Calculamos la nota más alta del estudiante
    // Si el estudiante tiene notas (es decir, el array de notas tiene longitud > 0),
    // utilizamos Math.max para obtener la nota máxima
    // Si no tiene notas, asignamos un valor de 0
    let topNote = student.notes.length > 0 ? Math.max(...student.notes) : 0;

    // Retornamos un objeto con el nombre del estudiante y la nota más alta
    return { name: student.name, topNote: topNote };
  });
}

// Llamada a la función con un ejemplo de estudiantes y sus notas
console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ])
);
// Resultado esperado:
// [
//   { name: "John", topNote: 5 },
//   { name: "Max", topNote: 6 },
//   { name: "Zygmund", topNote: 3 }
// ]
