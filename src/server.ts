import express, { urlencoded, json } from "express";
import cors from "cors";
import { error, notFound } from './middleware/index.ts';
import greatCometsRouter from "./routes/greatComets.ts";

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/api/v1", greatCometsRouter);

app.use(notFound);
app.use(error);

export default app;