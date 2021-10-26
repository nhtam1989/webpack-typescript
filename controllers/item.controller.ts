import { Request, Response } from "express";
// import { connection } from "../config/connection";
import { findAll } from "../models/item.model";

export const middleware = async (req: Request, res: Response, next: any) => { 
    if(process.env.NODE_ENV == 'development'){
        next()
    } else {
        itemProduction(req, res)
    }
}


export const itemProduction = async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            status: '201',
            message: 'Welcom to Api ---------- Item Production'
        })
    } catch (e) {
        console.log(e);
    }
}


export const item = async (req: Request, res: Response) => {
    try {
        // const sql = "SELECT * FROM users limit 1";
        // connection.query(sql, async (err, results) => {
        //     if (err) throw err;
        //     res.status(200).json({
        //         status: '200',
        //         data: results
        //     });
        // });
        
        const data = await findAll()
        res.status(200).json({
            status: 200,
            data
        });
    } catch (e) {
        console.log(e);
    }
}
