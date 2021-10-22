import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { ___prod___ } from './utils/contants';
import { proxyRouter } from './api';
import { NotFoundError } from './utils/notFoundError';
import { ExpressErrorHandler } from './utils/ExpressErrorHandler';

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(proxyRouter);

//! Not found page error
app.all('*', NotFoundError);

// ! Error Handlers
app.use(ExpressErrorHandler);

export { app };
