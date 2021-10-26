
import { Item, ItemEmpty } from "../interface/items/item.interface";
import { Items } from "../interface/items/items.interface";

import { query } from "../helpers/query";

export const findAll = async () => {
    const sql = "SELECT * FROM users limit 1";
    return query(sql)
};
