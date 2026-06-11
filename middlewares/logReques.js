/** Middleware to log HTTP requests */
function logRequest(req, res, next) {
  // log the http method, the url, and the timestamp of the request
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip}`);
  next();
}

module.exports = logRequest;