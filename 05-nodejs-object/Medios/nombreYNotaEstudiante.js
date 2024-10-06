function getStudentsWithNamesAndTopNotes(students) {
  return students.map((student) => {
    //Devuelve un nuevo array con los elementos modificados
    let topNote = student.notes.length > 0 ? Math.max(...student.notes) : 0; //Si la longitud de las notas es mayor a 0, devuelve el valor máximo (math.max) de las notas, si no, devuelve 0
    return { name: student.name, topNote: topNote }; //Devuelve un objeto con el nombre del estudiante y la nota máxima
  });
}

console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ])
);
