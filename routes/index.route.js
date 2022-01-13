const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    isAdmin: req.session.isAdmin,
    name: req.session.admin?.name,
    password: req.session.admin?.password,
  });
  res.cookie('cart', '123', {
    maxAge: 14 * 24 * 60 * 60 * 1000,
  });
});

module.exports = router;
