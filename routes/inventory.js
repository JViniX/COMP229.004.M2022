var express = require('express');
var router = express.Router();

let inventoryController = require('../controller/inventory');


/* GET list of items */
router.get('/list', inventoryController.inventoryList);

// Routers for edit
router.get('/edit/:id', inventoryController.displayEditPage);
router.post('/edit/:id', inventoryController.processEditPage);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', inventoryController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', inventoryController.processAddPage);


router.get('/delete/:id', inventoryController.performDelete);


module.exports = router;