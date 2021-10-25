/**
 * Required External Modules and Interfaces
 */
import express from "express";
import { item } from "../../controllers/items/item.controller"

/**
* Router Definition
*/

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */
 itemsRouter.get("/", item );
