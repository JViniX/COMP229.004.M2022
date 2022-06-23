var express = require('express');
var router = express.Router();

let inventoryController = require('../controller/inventory');

// Connect to our model
let Inventory = require('../models/inventory');

function getErrorMessage(err) {    
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } 
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    // if(!req.isAuthenticated())
    // {
    //     req.session.url = req.originalUrl;
    //     return res.redirect('/users/signin');
    // }
    // next();
    passport.authenticate('tokencheck', { session: false }, function(err, user, info) {
        if (err) return res.status(401).json(
          { 
            success: false, 
            message: getErrorMessage(err)
          }
        );
        if (info) return res.status(401).json(
          { 
            success: false, 
            message: info.message
          }
        );
        // if (!user) throw new AuthError('401', 'User is not authenticated.');
        // console.log(user);
        req.user = user;
        next();
      })(req, res, next);
}

/* GET list of items */
router.get('/list', inventoryController.inventoryList);

// Routers for edit
// router.get('/edit/:id', requireAuth, inventoryController.displayEditPage);
router.put('/edit/:id', inventoryController.processEdit);

// Delete
router.delete('/delete/:id', inventoryController.performDelete);


/* GET Route for displaying the Add page - CREATE Operation */
// router.get('/add', requireAuth, inventoryController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', inventoryController.processAdd);

module.exports = router;