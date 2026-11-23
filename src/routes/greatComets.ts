import { Router } from "express";
import { addGreatComet, getAllGreatComets, getGreatComet } from "../handlers/index.ts";
import { validateGreatCometDesignation, validateGreatCometName, validateGreatCometYear, validateIdParam } from "../lib/index.ts";

const greatCometsRouter = Router();

greatCometsRouter.get("/great-comets", getAllGreatComets);
greatCometsRouter.get("/great-comets/:id", validateIdParam(), getGreatComet);
greatCometsRouter.post("/great-comet", validateGreatCometName(), validateGreatCometDesignation(), validateGreatCometYear(), addGreatComet);

export default greatCometsRouter;