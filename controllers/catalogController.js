const { getAll, getById, getLenovo, getApple, getAsus, getMSI, getOthers } = require('../services/catalogService.js');

const router = require('express').Router();


router.get('/all', (req, res) => {
    const search = req.query.search || '';
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = getAll(search, fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / All',
        catalog,
        search,
        fromPrice,
        toPrice
    });
});

router.get('/apple', (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = getApple(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / Apple',
        catalog,
        fromPrice,
        toPrice
    });
});

router.get('/asus', (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = getAsus(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / Asus',
        catalog,
        fromPrice,
        toPrice
    });
});

router.get('/lenovo', (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = getLenovo(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / Lenovo',
        catalog,
        fromPrice,
        toPrice
    });
});

router.get('/msi', (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = getMSI(fromPrice, toPrice);

    res.render('catalog', {
        title: 'Catalog / MSI',
        catalog,
        fromPrice,
        toPrice
    });
});

router.get('/others', (req, res) => {
    const fromPrice = Number(req.query.fromPrice) || 0;
    const toPrice = Number(req.query.toPrice) || 9999;

    const catalog = getOthers(fromPrice, toPrice);

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
        if (req.user != undefined) {
            product.us = true;

            if (product.owner == req.user.id) {
                product.isOwner = true;
            }
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