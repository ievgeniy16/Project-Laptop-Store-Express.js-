const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const homeController = require('./controllers/homeController.js');
const aboutController = require('./controllers/aboutController.js');
const catalogController = require('./controllers/catalogController.js');
const createController = require('./controllers/createController.js');
const cartController = require('./controllers/cartController.js');
const authController = require('./controllers/authController.js');
const mypageController = require('./controllers/mypageController.js');
const pageNotFound = require('./controllers/pageNotFound.js');
const defaultTitle = require('./middlewares/defaultTitle.js');

const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true}));
app.use('/static', express.static('static'));

// title default
app.use(defaultTitle('Laptop-Store'));

app.use('/', homeController);
app.use('/about', aboutController);
app.use('/catalog', catalogController);
app.use('/create', createController);
app.use('/cart', cartController);
app.use('/auth', authController);
app.use('/my-page', mypageController);

app.all('*', pageNotFound);


app.listen(3000, ()=> console.log('Server listening on port 3000'));