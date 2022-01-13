const router = require('express').Router();
const uuid = require('uuid');
const path = require('path');
const { Animal } = require('../db/models');

router.get('/', (req, res) => {
  res.render('changeAnimal');
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const { img } = req.files;
  try {
    const fileName = `${uuid.v4()}.jpg`;
    img.mv(path.resolve(__dirname, '..', 'public/img', fileName));
    // console.log(req.body);
    const newAnimal = await Animal.create({
      name,
      description,
      photo: fileName,
    });
    res.json({ message: 'Животное добавлено' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка' });
  }
});

module.exports = router;
