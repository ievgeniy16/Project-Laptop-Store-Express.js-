const { getAll, getById, getLenovo, getApple, getAsus, getMSI, getOthers, getPagination } = require('../services/catalogService.js');

const router = require('express').Router();


//Catalog + Search + Pagination
let page = 0;
router.get('/all', async (req, res) => {
    const search = req.query.search || '';
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;
    let catalog = await getAll(search, fromPrice, toPrice);

    let limit = 3;
    let startIndex;
    let endIndex;
    let prevFlag = true;
    let nextFlag = true;
    let viewPage = false;

    if (req.url == '/all') {
        startIndex = 0;
        endIndex = 3;
        page = 0;
        prevFlag = false;
    }
    if (req.query.previous) {
        startIndex = (page - 1) * limit;
        endIndex = page * limit;
        page = page - 1;
        if (page <= 0) {
            prevFlag = false;
        }
    }
    if (req.query.next) {
        startIndex = (page + 1) * limit;
        endIndex = startIndex + limit;
        page = page + 1;
        if (page >= Math.ceil(catalog.length / limit) - 1) {
            nextFlag = false;
        }
    }
    if (req.query.previous || req.query.next || req.url == '/all') {
        viewPage = true;
    }

    catalog = catalog.slice(startIndex, endIndex);
    // catalog = await getAll(search, fromPrice, toPrice).slice(startIndex, endIndex);

    res.render('catalog', {
        title: 'Catalog / All',
        catalog,
        search,
        fromPrice,
        toPrice,
        page: page + 1,
        prevFlag,
        nextFlag,
        viewPage
    });
});




router.get('/apple', async (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = await getApple(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / Apple',
        catalog,
        fromPrice,
        toPrice
    });
});

router.get('/asus', async (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = await getAsus(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / Asus',
        catalog,
        fromPrice,
        toPrice
    });
});

router.get('/lenovo', async (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = await getLenovo(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / Lenovo',
        catalog,
        fromPrice,
        toPrice
    });
});

router.get('/msi', async (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = await getMSI(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / MSI',
        catalog,
        fromPrice,
        toPrice
    });
});

router.get('/others', async (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = await getOthers(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / Others',
        catalog,
        fromPrice,
        toPrice
    });
});




router.get('/details/:id', async (req, res) => {
    const product = await getById(req.params.id);

    if (product) {
        // console.log(req.user);
        if (req.user != undefined) {
            product.us = true;

            if (product.owner == req.user.id) {
                // console.log('product.owner', product.owner);
                // console.log('req.user.id', req.user.id);
                product.isOwner = true;
            } else {
                product.isOwner = false;
            }
        } else {
            product.us = false;
        }

        res.render('details', {
            title: 'Details',
            product
        });
    } else {
        res.render('404');
    }

});


module.exports = router;