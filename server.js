const express = require('express');
const app = express();
const port = 3000;
// import the pizzas router
const pizzasRouter = require('./routers/pizzas');
// import the logRequest middleware
const logRequest = require('./middlewares/logReques');
const serverError = require('./middlewares/serverError');
const notFound = require('./middlewares/notFound');

// use the logRequest middleware for all routes
app.use(logRequest);
// register the static assets folder to serve static files like HTML, CSS, and JavaScript
app.use(express.static('public'));

// 👇 register the JSON body parser middleware to parse JSON request bodies
app.use(express.json());



// Start the server listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



app.get('/', (req, res) => {

  //app.daje('Welcome to the Pizzeria API!');

  res.json({ message: 'Welcome to the Pizzeria API!' });
});

// register the pizzas router for all routes starting with /api/pizzas
app.use('/api/pizzas', pizzasRouter);


// server error middlware 

app.use(serverError);

// 404 not found middleware
app.use(notFound);