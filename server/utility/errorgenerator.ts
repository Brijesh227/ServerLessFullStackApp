import { Response } from "express";

export default function errorGenerator(res: Response, code: number, msg?: string) {
    if (res && code && msg) {
        res.status(code).json({ message: msg });
    } else {
        res.sendStatus(code);
    }
}