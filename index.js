const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
const cookieParser = require('cookie-parser');
const session = require('./middlewares/session.js');


const homeController = require('./controllers/homeController.js');
const aboutController = require('./controllers/aboutController.js');
const catalogController = require('./controllers/catalogController.js');
const createController = require('./controllers/createController.js');
const editController = require('./controllers/editController.js');
const deleteController = require('./controllers/deleteController.js');
const cartController = require('./controllers/cartController.js');
const authController = require('./controllers/authController.js');
const mypageController = require('./controllers/mypageController.js');
const pageNotFound = require('./controllers/pageNotFound.js');
const defaultTitle = require('./middlewares/defaultTitle.js');
const { hasUser } = require('./middlewares/guards.js');  // if guest click this link //localhost:3000/create, will work guard

const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// form parser in req.body
app.use(express.urlencoded({ extended: true}));
app.use('/static', express.static('static'));
// now app have res.cookie()
app.use(cookieParser());
app.use(session());

// title default
app.use(defaultTitle('Laptop-Store'));

app.use('/', homeController);
app.use('/about', aboutController);
app.use('/catalog', catalogController);
app.use('/create', hasUser(), createController);
app.use('/catalog/edit', editController);
app.use('/catalog/delete', deleteController);
app.use('/cart', cartController);
app.use('/auth', authController);
app.use('/my-page', mypageController);

app.all('*', pageNotFound);



app.listen(3000, ()=> console.log('Server listening on port 3000'));