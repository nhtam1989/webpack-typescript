import { Request, Response } from "express";

export const middleware = async (req: Request, res: Response, next: any) => { 
  
    if(process.env.NODE_ENV !== 'development'){
        next()
    } else {
        res.status(200).json({
            status: '201',
            module: 'Development',
            message: 'Welcom to Api ----------Development'
        })
    }
    
}

export const index = async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            status: '200',
            module: 'Production',
            message: 'Welcom to Api ----------Production'
        })
    } catch (e) {
        console.log(e);
    }
}
