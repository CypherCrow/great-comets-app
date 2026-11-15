import { body, param } from "express-validator";

export function validateGreatCometName() {
    return body("name").notEmpty().isString().trim().escape();
}

export function validateGreatCometDesignation() {
    return body("designation").notEmpty().isString().trim().escape();
}

export function validateGreatCometYear() {
    return body("year").notEmpty().isInt().escape();
}

export function validateIdParam() {
    return param("id").toInt().isInt();
}