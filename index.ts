import Logger from "./src/tools/Logger";

const ENV = process.env.NODE_ENV || "development";

import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";

import Router from "./src/routes/Router";

const appname = "Authentication";

const app = express();
const log = Logger(appname);

const CORSOptions = {
    credentials: true,
    origin: true,
};

app.use("*", cors(CORSOptions));
app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", Router);

app.set("env", ENV);
app.set("port", process.env.port || 4000);

const server = app.listen(app.get("port"), () => {
    log.info(
        "%s is running, listening on Port %s, environment: %s",
        appname,
        app.get("port"),
        ENV.toLowerCase(),
    );
});
