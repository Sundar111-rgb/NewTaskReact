const express = require("express");
const detailsController = require("./detailsController");
const router = express.Router();
const controller = new detailsController();

router.post('/',controller.addDetails);
router.get('/',controller.getDetails);
router.get('/custom/',controller.getDetailsByCustomId);
router.put('/',controller.updateDetailsById);
router.delete('/',controller.deleteDetailsById);
 
module.exports = router;