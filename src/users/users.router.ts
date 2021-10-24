/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as UserService from "./users.service";
import { User, ItemEmpty } from "./user.interface";
import { Users } from "./users.interface";
import ApolloClient, { gql, InMemoryCache } from "apollo-boost";
import { HttpLink } from 'apollo-link-http';
import { createHttpLink } from 'apollo-link-http';
// import fetch from 'node-fetch';
// import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

// const httpLink = new HttpLink({
//     uri: 'https://prompt-platypus-67.hasura.app/v1/graphql',
//     headers: {
//         'x-hasura-admin-secret': 'TjU2UqF1lic9oPPFTYlQ6gqqi8POh53yViBRKu0WZVHZD6590ncVNxWa0Cft0txR'
//     }
// });

// const apolloClient = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//     connectToDevTools: true
// });

// console.log("apolloClient",apolloClient);
// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//     //   authorization: localStorage.getItem('token') || null,
//     }
//   }));

//   return forward(operation);
// })

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: concat(authMiddleware, httpLink),
// });

// import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';



// const apolloClient = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//     connectToDevTools: true
// });
// console.log("apolloClient", apolloClient);

// const GET_USERS = gql`
//     query getListUser {
//         db_demo_users {
//         id
//         username
//         fullname
//         }
//     }
// `;

/**
* Router Definition
*/

export const usersRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items/

usersRouter.get("/", async (req: Request, res: Response) => {
    try {
        const items = await UserService.findAll();
        res.status(200).send(items);
    } catch (e) {
        console.log(e);
        // res.status(404).send(e.message);
    }
});

// GET items/:id

usersRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const item: User = await UserService.find(id);
        if (item) {
            res.status(200).send(item);
        } else {
            const message: ItemEmpty = {
                status: '404',
                message: 'No record found'
            }
            res.status(404).send(message);
        }
    } catch (e) {
        console.log(e);
        // res.status(404).send(e.message);
    }
});


// POST items/

usersRouter.post("/", async (req: Request, res: Response) => {
    try {
        const item: User = req.body.item;

        await UserService.create(item);

        res.sendStatus(201);
    } catch (e) {
        console.log(e);
        // res.status(404).send(e.message);
    }
});

// PUT items/

usersRouter.put("/", async (req: Request, res: Response) => {
    try {
        const item: User = req.body.item;

        await UserService.update(item);

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        // res.status(500).send(e.message);
    }
});
// DELETE items/:id

usersRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await UserService.remove(id);

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        // res.status(500).send(e.message);
    }
});