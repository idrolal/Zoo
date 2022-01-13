module.exports = (req, res, next) => {
  if (req.session && req.session.admin) {
    res.locals.id = req.session.admin.id;
    res.locals.login = req.session.admin.login;
    res.locals.email = req.session.admin.email;
    res.locals.isAdmin = req.session.isAdmin;
  } else {
    res.locals.isAdmin = false;
  }
  next();
};
