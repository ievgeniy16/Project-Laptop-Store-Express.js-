const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('catalog', {
        title: 'Catalog'
    });
});

router.get('/details', (req, res) => {
    res.render('details', {
        title: 'Details'
    })
});


module.exports = router;