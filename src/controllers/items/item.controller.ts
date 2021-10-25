import { Request, Response } from "express";
import { findAll } from "../../models/items/item.model";

export const item = async (req: Request, res: Response) => {
    try {
        const data = await findAll()
        res.status(200).json(data)
        // res.status(200).render('items/list',{
        //     title: 'List Items',
        //     data: data
        // })
    } catch (e) {
        console.log(e);
    }
}
