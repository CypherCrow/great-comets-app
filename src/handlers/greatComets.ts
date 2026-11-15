import { Response, Request, NextFunction } from "express";
import { db } from "../db/index.js";
import { GreatCometsTable } from "../db/schema.js";
import { CustomError } from "../lib/custom-error.js";
import { eq } from "drizzle-orm";
import { validationResult } from "express-validator";

export async function addGreatComet(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
        return next(new CustomError(JSON.stringify(result.array()), 400));
    }
    try {
        const greatComet = await db.insert(GreatCometsTable).values(req.body).returning();
        res.status(201).json({ greatComet });
    } catch (error) {
        next(new CustomError("Failed to add great comet", 500));
    }
}

export async function getAllGreatComets(req: Request, res: Response, next: NextFunction) {
    try {
        const greatComets = await db.select().from(GreatCometsTable);
        res.status(200).json({ greatComets });
    } catch (error) {
        next(new CustomError("Failed to fetch great comets", 500));
    }
}

export async function getGreatComet(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
        return next(new CustomError(JSON.stringify(result.array()), 400));
    }
    try {
        const greatComet = await db
            .select()
            .from(GreatCometsTable)
            .where(eq(GreatCometsTable.id, +req.params.id));
        res.status(200).json({ greatComet });
    } catch (error) {
        next(new CustomError("Failed to fetch great comet", 500));
    }
}