import express, {Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';
import router from './routes/routes';

const app = express();

app.use(json());

app.use('/todos', router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: error.message });
 });

// app.get('/api', (req, res) => {
//     res.send({ message: 'Welcome to mod-15!' });
// });

export default app;
