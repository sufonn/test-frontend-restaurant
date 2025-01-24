import axios from "axios";
import express, { Application, Request, Response } from "express";
import apiRoute from './routes/apiRoute'

const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api', apiRoute)

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
