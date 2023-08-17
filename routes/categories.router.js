const express= require("express");

const categoriesRouter = express.Router();

const categoriesHandle= require('../controllers/categoriesController');


categoriesRouter.route("/").
get(categoriesHandle)

module.exports = categoriesRouter; 