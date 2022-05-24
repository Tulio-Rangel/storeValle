const boom = require('@hapi/boom');

function checkAdminRole(req, res, next) {
  const user = req.user;
  if (user.role === "admin") {
    next();
  } else {
    next(boom.forbidden("You're not an admin."))
  }
}

module.exports = { checkAdminRole };
