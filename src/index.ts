
import express, { Request, Response } from 'express';
import { Routes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
})

app.use('/api', new Routes().router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
