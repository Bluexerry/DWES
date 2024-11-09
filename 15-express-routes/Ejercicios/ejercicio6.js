const express = require('express');
const app = express();
const PORT = 3000;

// Creamos un enrutador para las rutas de /animals
const animalsRouter = express.Router();

animalsRouter.get('/dog', (req, res) => {
    res.json({ grow: "guau guau" });
});

animalsRouter.get('/cat', (req, res) => {
    res.json({ grow: "miau" });
});

animalsRouter.get('/bird', (req, res) => {
    res.json({ grow: "pio pio" });
});

app.use('/animals', animalsRouter);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        code: 404,
        error: "Not Found",
        message: "Error: Path not found"
    });
});

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//Pruebas:
//http://localhost:3000/animals/lion
// curl http://localhost:3000/animals/lion

//Respuesta:
// {"code":404,"error":"Not Found","message":"Error: Path not found"}
