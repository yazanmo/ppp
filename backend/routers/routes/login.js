const express = require("express");

 
 const {checkLogin} = require("./../controllers/login");
const loginRouter = express.Router();

loginRouter.post("/login", checkLogin);



module.exports = loginRouter;