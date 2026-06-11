const express = require('express');
const router = express.Router();
// import the pizzas data
const pizzaController = require('../controllers/pizzaController');
const logRequest = require('../middlewares/logReques');


// on every route in this router, log the request
//router.use(logRequest);

// INDEX route to return the list of pizzas
router.get('/', logRequest, pizzaController.index);

// SHOW route to return a single pizza by id
router.get('/:id', logRequest, pizzaController.show);

// STORE route to create a new pizza
router.post('/', pizzaController.store);

// UPDATE route to update a pizza by id
router.put('/:id', pizzaController.update);

// MODIFY route to modify a pizza by id
router.patch('/:id', pizzaController.modify);


// DESTROY route to delete a pizza by id
router.delete('/:id', pizzaController.destroy);


module.exports = router;