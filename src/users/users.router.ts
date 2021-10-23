/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as UserService from "./users.service";
import { User, ItemEmpty } from "./user.interface";
import { Users } from "./users.interface";

/**
* Router Definition
*/

export const usersRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items/

usersRouter.get("/", async (req: Request, res: Response) => {
    try {
        const items = await UserService.findAll();
        res.status(200).send(items);
    } catch (e) {
        console.log(e);
        // res.status(404).send(e.message);
    }
});

// GET items/:id

usersRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const item: User = await UserService.find(id);
        if(item){
            res.status(200).send(item);
        } else {
            const message: ItemEmpty = {
                status: '404',
                message: 'No record found'
            }
            res.status(404).send(message);
        }
    } catch (e) {
        console.log(e);
        // res.status(404).send(e.message);
    }
});


// POST items/

usersRouter.post("/", async (req: Request, res: Response) => {
    try {
        const item: User = req.body.item;

        await UserService.create(item);

        res.sendStatus(201);
    } catch (e) {
        console.log(e);
        // res.status(404).send(e.message);
    }
});

// PUT items/

usersRouter.put("/", async (req: Request, res: Response) => {
    try {
        const item: User = req.body.item;

        await UserService.update(item);

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        // res.status(500).send(e.message);
    }
});
// DELETE items/:id

usersRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await UserService.remove(id);

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        // res.status(500).send(e.message);
    }
});