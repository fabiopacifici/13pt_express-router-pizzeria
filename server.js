const express = require('express');
const app = express();
const port = 3000;
// import the pizzas router
const pizzasRouter = require('./routers/pizzas');
// import the logRequest middleware
const logRequest = require('./middlewares/logReques');

// 📌 Global Middewares
// This is a global middleware that is called on every request to the server.
//app.use(logRequest);


/* With anonymous function */

/*
app.use((req, res, next) => {
    // log the http method, the url, and the timestamp of the request
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip}`);
    next();
}); */

// This is a global middleware that is called on every request to the server, but only for routes starting with /api/
/* app.use('/api/', (req, res, next) => {
  // log the http method, the url, and the timestamp of the request
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip}`);
  next();
}); */

// register the static assets folder to serve static files like HTML, CSS, and JavaScript
app.use(express.static('public'));

// 👇 register the JSON body parser middleware to parse JSON request bodies
app.use(express.json());



// Start the server listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// 📌 Register the middleware only for a specific route, in this case, the / route
// create the first route for the pizzeria entry point
/* app.get('/', (req, res, next) => {
  // log the http method, the url, and the timestamp of the request
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip}`);
  next();
}, (req, res) => {
  res.json({ message: 'Welcome to the Pizzeria API!' });
}); */


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Pizzeria API!' });
});

// register the pizzas router for all routes starting with /api/pizzas
app.use('/api/pizzas', pizzasRouter);


