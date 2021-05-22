import cors from 'cors';
import { Application, Request, Response } from 'express';
import routes from './routes';
import { verifyAccessToken as auth } from './utils/index';
import express = require('express');

export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', auth, routes);

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
