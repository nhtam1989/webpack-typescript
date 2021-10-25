/**
 * Required External Modules and Interfaces
 */
import express from "express";
import { home } from "../../controllers/home/home.controller"
/**
* Router Definition
*/

export const homeRouter = express.Router();

/**
 * Controller Definitions
 */
homeRouter.get("/", home );
