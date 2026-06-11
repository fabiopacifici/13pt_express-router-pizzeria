const express = require('express');
const router = express.Router();
// import the pizzas data
const pizzaController = require('../controllers/pizzaController');
const checkApiKey = require('../middlewares/checkApiKey');

// on every route in this router, log the request
//router.use(logRequest);

// INDEX route to return the list of pizzas
router.get('/', pizzaController.index);

// SHOW route to return a single pizza by id
router.get('/:id', pizzaController.show);

// STORE route to create a new pizza

router.post('/', checkApiKey, pizzaController.store);

// UPDATE route to update a pizza by id
router.put('/:id', checkApiKey, pizzaController.update);

// MODIFY route to modify a pizza by id
router.patch('/:id', checkApiKey, pizzaController.modify);


// DESTROY route to delete a pizza by id
router.delete('/:id', checkApiKey, pizzaController.destroy);


module.exports = router;