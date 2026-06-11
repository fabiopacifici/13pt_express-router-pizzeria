const checkApiKey = (req, res, next) => {

  // check the request header for the fab_api_key and if it's not present or it's not equal to '123456', return a 401 Unauthorized error
  const apiKey = req.headers['fab_api_key'];
  if (!apiKey || apiKey !== '123456') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // if the api key is valid, call the next middleware to create the pizza
  next();

}

module.exports = checkApiKey;