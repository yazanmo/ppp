const express = require("express");

const buyerRouter = express.Router();

const {
    createNewBuyer,getAllBuyer,getBuyerByName
} = require("../controllers/buyer");

buyerRouter.post("/register", createNewBuyer);
buyerRouter.get("/buyer", getAllBuyer)
buyerRouter.get("/buyer/search",  getBuyerByName)




module.exports = buyerRouter;