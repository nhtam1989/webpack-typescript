/**
 * Required External Modules and Interfaces
 */
 import express from "express";
 import { index, middleware } from "../controllers/index.controller"
 
 /**
 * Router Definition
 */
 
 export const indexRouter = express.Router();
 
 /**
  * Controller Definitions
  */
  indexRouter.get("/", middleware , index );
 