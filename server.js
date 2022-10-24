/*****  Packages  *****/
import cors from "cors";
import express from "express"
import winston from "winston";

/*****  Modules  *****/
import connectDB from "#config/db";
import logger from "#utils/logger";
import routes from "#routes/index";
import {envConfig} from "#utils/env";


envConfig();
connectDB();
logger();

const app = express();
const PORT = process.env.PORT || 5000;

/*****  Middlewares  *****/
app.use(cors());
app.use(express.json())

routes(app);

app.listen(PORT, () => winston.info(`Server is Listening on port ${PORT}.`));
