const route = require('express').Router();
const { Tariff } = require('../db/models');

route.get('/', async (req, res) => {
  const tariff = await Tariff.findAll();
  console.log('TARIF', tariff)
  res.render('tariffPage', {
    tariff,
    isAdmin: req.session.isAdmin,
    name: req.session.admin?.name,
    password: req.session.admin?.password,
  });
});

route.put('/', async (req, res) => {
  const {
    name, description, price, id,
  } = req.body;
  console.log('reqbody', req.body);
  try {
    const tariff = await Tariff.update({
      name,
      description,
      price,
    }, {
      where: { id },
    });
    res.json({ message: 'wow' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка' });
  }
});

module.exports = route;
