/**
 * Required External Modules
 */
require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from 'path';
// require('app-module-path').addPath(path.join(__dirname, './'));

// import router
import { indexRouter } from "./routers/index.router";
// -----------------------
import { itemsRouter } from "./routers/item.router";


/**
* App Variables
*/
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const DOMAIN: string = process.env.DOMAIN || 'localhost';
const app = express();

/**
*  App Configuration
*/
app.set('view engine', 'pug')
app.set('views', './views');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", indexRouter);
app.use("/items", itemsRouter);

/**
 * Server Activation
 */

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${DOMAIN}:${PORT}`)
});

/**
 * Webpack HMR Activation
 */

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}