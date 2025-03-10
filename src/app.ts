import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import formRouter from './routes/formRoutes';


dotenv.config();

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/api/forms", formRouter )

export default app;