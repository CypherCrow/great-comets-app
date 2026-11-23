import type { Request, Response, NextFunction } from "express";
import { CustomError } from "../lib/index.ts";

export function notFound(req: Request, res: Response, next: NextFunction) {
    return next(new CustomError("Route not found", 404));
}