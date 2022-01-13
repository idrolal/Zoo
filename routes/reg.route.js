const route = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

route.get('/', (req, res) => {
  res.render('reg');
});

route.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.create({
      email,
      password: await bcrypt.hash(password, 10),
    });
    req.session.admin = admin;
    req.session.isAdmin = true;
    res.json({ isAdmin: true });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = route;
