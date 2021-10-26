import { Request, Response } from "express";
import { connection } from "../../config/connection";
import { findAll } from "../../models/items/item.model";

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
