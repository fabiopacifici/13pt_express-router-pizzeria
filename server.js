const express = require('express');
const app = express();
const port = 3000;
// import the pizzas router
const pizzasRouter = require('./routers/pizzas');


// register the static assets folder to serve static files like HTML, CSS, and JavaScript
app.use(express.static('public'));

// 👇 register the JSON body parser middleware to parse JSON request bodies
app.use(express.json());

// Start the server listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




// create the first route for the pizzeria entry point
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Pizzeria API!' });
});


// register the pizzas router for all routes starting with /api/pizzas
app.use('/api/pizzas', pizzasRouter);


