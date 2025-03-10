import express from 'express';
import routes from './routes/index.js';
import './config.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});