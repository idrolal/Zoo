const express = require('express');
const morgan = require('morgan');
const path = require('path');

// cookie - session
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const sessionMiddleware = require('./middleware/session');
// const bcrypt = require('bcrypt');
const indexRoute = require('./routes/index.route');

const PORT = 4000;
const app = express();

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test',	// Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

// Роуты
const authRoute = require('./routes/auth.route');
const regRoute = require('./routes/reg.route');
const logoutRout = require('./routes/logout.route');
const animalPageRoute = require('./routes/animalPage.route');
const tariffPageRoute = require('./routes/tariffPage.route');
const editTariff = require('./routes/editTariff.route');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());
app.use(expressSession(sessionConfig));
app.use(sessionMiddleware);
app.use(express.urlencoded({ extended: true }));

app.use('/login', authRoute);
app.use('/reg', regRoute);
app.use('/logout', logoutRout);
app.use('/animal', animalPageRoute);
app.use('/tariff', tariffPageRoute);
app.use('/editTariff', editTariff);

app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log('The server has been started', PORT);
});
