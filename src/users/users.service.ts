/**
 * Data Model Interfaces
 */

import { User, ItemEmpty } from "./user.interface";
import { Users } from "./users.interface";


/**
* In-Memory Store
*/

// const items: Items = {
//     1: {
//         id: 1,
//         name: "Burger",
//         price: 5.99,
//         description: "Tasty",
//         image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
//     },
//     2: {
//         id: 2,
//         name: "Pizza",
//         price: 2.99,
//         description: "Cheesy",
//         image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
//     },
//     3: {
//         id: 3,
//         name: "Tea",
//         price: 1.99,
//         description: "Informative",
//         image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
//     }
// };


const items: Users = [
    {
        id: 1,
        username: "nhtam",
        fullname: "Nguyễn Hoàng Tâm",
    },
]
/**
* Service Methods
*/

export const findAll = async (): Promise<Users> => {
    return items;
};

export const find = async (id: number): Promise<User> => {
    try {

        if (items instanceof Array) {
            const record: User = items.find((item: any) => item.id === id);
            if (record) {
                return record;
            } else {
                return record;
            }
        }
        
        throw new Error("No record found");
    } catch (e) {
        console.log("Error",e);
        throw new Error("No record found");
    };
};

export const create = async (newItem: User): Promise<void> => {
    const id = new Date().valueOf();
    items[id] = {
        ...newItem,
        id
    };
};


export const update = async (updatedItem: User): Promise<void> => {
    if (items[updatedItem.id]) {
        items[updatedItem.id] = updatedItem;
        return;
    }

    throw new Error("No record found to update");
};


export const remove = async (id: number): Promise<void> => {
    const record: User = items[id];

    if (record) {
        delete items[id];
        return;
    }

    throw new Error("No record found to delete");
};