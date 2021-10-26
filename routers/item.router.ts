/**
 * Required External Modules and Interfaces
 */
import express from "express";
import { item, middleware } from "../controllers/item.controller"

/**
* Router Definition
*/

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */
 itemsRouter.get("/",middleware, item );
