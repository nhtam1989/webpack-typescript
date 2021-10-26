import { Request, Response } from "express";

export const home = async (req: Request, res: Response) => {
    try {
        res.status(200).render('index',{
            title: 'Home',
            name:'nhtam'
        })
    } catch (e) {
        console.log(e);
    }
}
