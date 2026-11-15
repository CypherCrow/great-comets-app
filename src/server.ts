import express, { urlencoded, json } from "express";
import { error, notFound } from './middleware';
import greatCometsRouter from "./routes/greatComets";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/great-comets-api/v1", greatCometsRouter);

app.use(notFound);
app.use(error);

export default app;