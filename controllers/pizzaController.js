const pizzas = require('../data/pizzas');

/**
 * Index route to return the list of pizzas, with optional query parameter to filter by ingredient
 * @param {Object} req 
 * @param {Object} res 
 * @returns {void}
 */
const index = (req, res) => {

  console.log(req.query); // {ingredient: 'pomodoro'} 
  const ingredient = req.query.ingredient;
  console.log(ingredient);

  if (ingredient) {
    // filter the pizzas that contain the ingredient
    const filteredPizzas = pizzas.filter(pizza => pizza.ingredients.includes(ingredient));
    return res.json(filteredPizzas);
  }

  res.json(pizzas);
}


/**
 * Show route to return a single pizza by id
 * @param {Object} req 
 * @param {Object} res 
 * @returns {void}
 */
const show = (req, res) => {
  console.log(req.params); // {id: '3'}
  const pizzaId = parseInt(req.params.id);
  console.log(pizzaId);

  // find the pizza with the matching id
  const thisPizza = pizzas.find(pizza => pizza.id === pizzaId);

  // status code 404 if the pizza is not found
  if (!thisPizza) {
    return res.status(404).json({ error: true, message: '404 Pizza not found' });
  }


  res.json(thisPizza);

}

// 👇 store route
// store a new pizza (not implemented yet)
const store = (req, res) => {
  console.log(req.body); // {name: 'Pizza Margherita', ingredients: ['pomodoro', 'mozzarella']}

  // create a new id for the new pizza object by taking the last pizza id and adding 1
  const newId = pizzas[pizzas.length - 1].id + 1;
  //const id = Date.now(); // alternative id generation using timestamp

  // create the new pizza object by spreading the request body and adding the new id
  const newPizza = {
    id: newId,
    ...req.body
  }

  // push the new pizza object to the pizzas array
  pizzas.push(newPizza);

  //console.log(pizzas);

  // return the resposnse with status code 201 Created and the new pizza object in JSON format
  res.status(201).json(newPizza);
}





// update a pizza by id (not implemented yet)
const update = (req, res) => {
  res.json({ message: 'Update a pizza by id' });
}


// modify a pizza by id (not implemented yet)
const modify = (req, res) => {
  res.json({ message: 'Modify a pizza by id' });
}


/**
 * Destroy route to delete a pizza by id
 * @param {Object} req 
 * @param {Object} res 
 * @returns {void}
 */
const destroy = (req, res) => {

  console.log(req.params); // {id: '3'}
  const pizzaId = parseInt(req.params.id);
  console.log(pizzaId);

  // find the pizza with the matching id
  const thisPizza = pizzas.find(pizza => pizza.id === pizzaId);

  // status code 404 if the pizza is not found
  if (!thisPizza) {
    return res.status(404).json({ error: true, message: '404 Pizza not found' });
  }

  // finds the pizza index from the array
  const index = pizzas.indexOf(thisPizza);
  // remove 1 element at the index position
  pizzas.splice(index, 1);

  //console.log(pizzas);
  res.sendStatus(204); // 204 No Content

}



module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};