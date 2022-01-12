module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.id = req.session.user.id;
    res.locals.login = req.session.user.login;
    res.locals.email = req.session.user.email;
    res.locals.isAdmin = req.session.user.isAdmin;
  } else {
    res.locals.isAdmin = false;
  }
  next();
};
