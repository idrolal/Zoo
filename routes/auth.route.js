const route = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

route.get('/', (req, res) => {
  res.render('auth');
});

route.post('/', async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({
    where: { email, password },
  });

  if (admin) {
    req.session.admin = admin;
    req.session.isAdmin = true;
    res.json({ isAdmin: true });
  } else {
    res.status(404).json({ isAdmin: false });
  }
});

module.exports = route;
