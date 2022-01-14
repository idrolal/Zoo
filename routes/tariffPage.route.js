const route = require('express').Router();
const { Tariff } = require('../db/models');

route.get('/', async (req, res) => {
  const tariff = await Tariff.findAll();
  res.render('tariffPage', { tariff });
});

module.exports = route;
