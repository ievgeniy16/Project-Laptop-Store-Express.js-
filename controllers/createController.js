const { create } = require('../services/catalogService.js');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('create', {
        title: 'Create'
    })
});


router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        res.redirect('/catalog/details/' + result.id)
    } catch(err) {
        res.render('create', {
            title: 'Request Error',
            error: err.message.split('\n')
        })
    }
});


module.exports = router;