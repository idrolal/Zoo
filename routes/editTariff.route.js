const route = require('express').Router();
const pool = require('pg').pool();
const { Tariff } = require('../db/models');

route.get('/', async (req, res) => {
  const tariff = await Tariff.findAll();
  res.render('tariffPage', {
    tariff,
    isAdmin: req.session.isAdmin,
    name: req.session.admin?.name,
    password: req.session.admin?.password,
  });
});

route.get('/:id', async (req, res) => {
  const { id } = req.body;
  pool.query('SELECT * FROM tariff WHERE id=?', [id], (err, data) => {
    if (err) return alert('ooops');
    return res.render('tariffPage', {
      tariff: data[0],
    });
  });
});

route.post('/:id', async (req, res) => {
  const { name, description, price } = req.body;
  //   const tariff = await Tariff.update({
  //     name,
  //     description,
  //     price,
  //   });
  pool.query('UPDATE tariff SET name=?, description=?, price=? WHERE id=?', [name, description, price], (err, data) => {
    if (err) return alert('opps');
    return res.json({ message: 'wow' });
  });
});

module.exports = route;
