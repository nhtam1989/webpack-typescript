
import { Item, ItemEmpty } from "../../interface/items/item.interface";
import { Items } from "../../interface/items/items.interface";

const items: Items = [
    {
        id: 1,
        name: "Burger",
        price: 5.99,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    {
        id: 2,
        name: "Pizza",
        price: 2.99,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    {
        id: 3,
        name: "Tea",
        price: 1.99,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
]

export const findAll = async () => {
    return items;
};

// export const item = async (req: Request, res: Response) => {
//     try {
//         res.status(200).render('items/list',{
//             title: 'List Items',
//             data: items
//         })
//     } catch (e) {
//         console.log(e);
//     }
// }
