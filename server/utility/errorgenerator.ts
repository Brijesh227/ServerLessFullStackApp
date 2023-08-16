import { Response } from "express";

export default function errorGenerator(res: Response, code: number, msg?: string): Response {
    if (res && code && msg) {
        return res.status(code).send({ errorMessage: msg });
    } else {
        return res.sendStatus(code);
    }
}