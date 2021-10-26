// /**
//  * Data Model Interfaces
//  */

// import { Item, ItemEmpty } from "../interface/items/item.interface";
// import { Items } from "../interface/items/items.interface";


// /**
// * In-Memory Store
// */

// // const items: Items = {
// //     1: {
// //         id: 1,
// //         name: "Burger",
// //         price: 5.99,
// //         description: "Tasty",
// //         image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
// //     },
// //     2: {
// //         id: 2,
// //         name: "Pizza",
// //         price: 2.99,
// //         description: "Cheesy",
// //         image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
// //     },
// //     3: {
// //         id: 3,
// //         name: "Tea",
// //         price: 1.99,
// //         description: "Informative",
// //         image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
// //     }
// // };


// const items: Items = [
//     {
//         id: 1,
//         name: "Burger",
//         price: 5.99,
//         description: "Tasty",
//         image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
//     },
//     {
//         id: 2,
//         name: "Pizza",
//         price: 2.99,
//         description: "Cheesy",
//         image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
//     },
//     {
//         id: 3,
//         name: "Tea",
//         price: 1.99,
//         description: "Informative",
//         image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
//     }
// ]
// /**
// * Service Methods
// */

// export const findAll = async (): Promise<Items> => {
//     return items;
// };

// export const find = async (id: number): Promise<Item> => {
//     try {

//         if (items instanceof Array) {
//             const record: Item = items.find((item: any) => item.id === id);
//             if (record) {
//                 return record;
//             } else {
//                 return record;
//             }
//         }
        
//         throw new Error("No record found");
//     } catch (e) {
//         console.log("Error",e);
//         throw new Error("No record found");
//     };
// };

// export const create = async (newItem: Item): Promise<void> => {
//     const id = new Date().valueOf();
//     items[id] = {
//         ...newItem,
//         id
//     };
// };


// export const update = async (updatedItem: Item): Promise<void> => {
//     if (items[updatedItem.id]) {
//         items[updatedItem.id] = updatedItem;
//         return;
//     }

//     throw new Error("No record found to update");
// };


// export const remove = async (id: number): Promise<void> => {
//     const record: Item = items[id];

//     if (record) {
//         delete items[id];
//         return;
//     }

//     throw new Error("No record found to delete");
// };