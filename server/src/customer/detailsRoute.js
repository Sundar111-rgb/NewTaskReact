const express = require("express");
const detailsController = require("./detailsController");
const router = express.Router();
const controller = new detailsController();

router.post('/',controller.addDetails);
router.get('/',controller.getDetails);
router.get('/:id',controller.getDetailsById);
router.get('/custom/:id',controller.getDetailsByCustomId);
router.put('/',controller.updateDetailsById);
router.delete('/',controller.deleteDetailsById);

module.exports = router;