// query

import { connection } from "../config/connection";

export const query = async (q: string) =>
    new Promise((resolve, reject) => {
            const handler = (error: any, result: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            }
            connection.query(q, handler);
        });