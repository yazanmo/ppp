const express = require('express');

// controllers
const {createNewRole} = require('./../controllers/Role')
const roleRouter = express.Router();

roleRouter.post('/roles',createNewRole);

module.exports = roleRouter;