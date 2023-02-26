const express = require("express");
const detailsController = require("./detailsController");


const router = express.Router();
const controller = new detailsController();



router.post('/:id',controller.id);
router.post('/:name',controller.name);
router.post('/:address',controller.address);




module.exports = router;