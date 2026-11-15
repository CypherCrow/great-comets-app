import express, { urlencoded, json } from "express";
import { notFound } from "./middleware/not-found.ts";
import { error } from "./middleware/error.ts";
import greatCometsRouter from "./routes/greatComets.js";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/great-comets-api/v1", greatCometsRouter);

app.use(notFound);
app.use(error);

export default app;