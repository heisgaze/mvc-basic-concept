import express from "express";
const routerUser = express.Router();

import {
    GetAllUser,
    GetUser
} from "../controllers/user.js";

routerUser.get('/all', GetAllUser);
routerUser.get("/byId/:id", GetUser);

export {
    routerUser
};