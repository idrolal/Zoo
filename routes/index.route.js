const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
  res.cookie('cart', '123', {
    maxAge: 14 * 24 * 60 * 60 * 1000,
  });

});

module.exports = router;
