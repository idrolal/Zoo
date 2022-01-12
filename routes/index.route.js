const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
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
      res.json({ message: 'Всё чики-пуки, красава!' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
})

module.exports = router;
