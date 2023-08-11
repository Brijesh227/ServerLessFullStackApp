import { Response } from "express";

export default function errorGenerator(res: Response, code: number, msg?: string) {
    if (res && code && msg) {
        res.status(code).send({ errorMessage: msg });
    } else {
        res.sendStatus(code);
    }
}