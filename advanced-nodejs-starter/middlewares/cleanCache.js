const { clearHash } = require('../services/cache');

module.exports = async  (req, res, next) => {
    await next(); // Wait for the request to finish before clearing the cache
    clearHash(req.user.id); // Clear the cache for the user after the request is completed
}