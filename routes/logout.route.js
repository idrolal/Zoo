const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy();
  res.redirect('index');
});

module.exports = router;