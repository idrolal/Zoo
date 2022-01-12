const route = require('express').Router();
const { Animal } = require('../db/models');

route.get('/', async (req, res) => {
  const animals = await Animal.findAll();
  res.render('animalPage', { animals });
});
module.exports = route;
