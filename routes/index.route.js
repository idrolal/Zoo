const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    isAdmin: req.session.isAdmin,
    name: req.session.admin?.name,
    password: req.session.admin?.password,
  });
});

module.exports = router;
