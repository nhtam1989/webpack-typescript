/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

/**
* Router Definition
*/

export const homeRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items/

homeRouter.get("/", async (req: Request, res: Response) => {
    try {
        res.status(200).send('Welcome to API');
    } catch (e) {
        console.log(e);
    }
});
