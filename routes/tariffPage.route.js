const route = require('express').Router();
const { Tariff } = require('../db/models');

route.get('/', async (req, res) => {
  const tariffs = await Tariff.findAll();
  res.render('tariffPage', { tariffs });
});

module.exports = route;
