const route = require('express').Router();
const { Tariff } = require('../db/models');

route.get('/', async (req, res) => {
  const tariffs = await Tariff.findAll();
  res.render('tariffPage', {
    tariffs,
    isAdmin: req.session.isAdmin,
    name: req.session.admin?.name,
    password: req.session.admin?.password,
  });
});

module.exports = route;
