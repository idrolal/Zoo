const router = require('express').Router();
const uuid = require('uuid');
const path = require('path');
const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  const allAnimal = await Animal.findAll();
  res.render('changeAnimal', { allAnimal });
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

router.delete('/delete', async (req, res) => {
  const { animalId } = req.body;
  await Animal.destroy({
    where: { id: animalId },
  });
  res.json({ message: 'Животное удалено' });
});

router.get('/:id', (req, res) => {
  res.render('editAnimal');
});

router.put('/:id', async (req, res) => {
  const animalId = req.params.id;
  const findAnimal = Animal.findOne({
    where: { id: animalId },
  });
  if (!findAnimal) {
    res.json({ message: 'Животное не найдено' });
  }
  const { name, description } = req.body;
  const { img } = req.files;
  console.log('req.body', req.body);
  try {
    const fileName = `${uuid.v4()}.jpg`;
    img.mv(path.resolve(__dirname, '..', 'public/img', fileName));
    // console.log(req.body);
    const newAnimal = await Animal.update({
      name,
      description,
      photo: fileName,
    }, {
      where: { id: animalId },
    });
    res.json({ message: 'Информация отредактированна' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка' });
  }
});

module.exports = router;
