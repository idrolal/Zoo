const route = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

route.get('/login', (req, res) => {
  res.render('auth');
});

route.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({
    where: { email },
  });

  try {
    if (!admin) {
      res.status(401).json({ message: 'Пользователя с таким email не существует' });
    } else if (admin && bcrypt.compare(password, admin.password)) {
      req.session.admin = admin;
      req.session.isAdmin = true;
      res.json({
        isAdmin: true,
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = route;
