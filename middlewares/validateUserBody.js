// we want to avoid requests that do not have the necessary information
// middleware will intercept the request and fail early if the correct information is not available
/**
 * @description validate user body
 * @param {Object} req request
 * @param {Object} res response
 * @param {VoidFunction} next function to continue the operation
 * @returns {VoidFunction} response or next
 */
const validateUserBody = (req, res, next) => {
  if (!req.body.id && !req.params.id) {
    return res.status(400).send({ message: 'You must include an id' });
  }
  // next will continue the operation and pass the request to the next phase
  next();
};

module.exports = {
  validateUserBody,
};
