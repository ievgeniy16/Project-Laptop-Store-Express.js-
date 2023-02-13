const { create } = require('../services/catalogService.js');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('create', {
        title: 'Create'
    })
});


router.post('/', async (req, res) => {
    try {
        const result = await create(req.body, req.user.id);
        res.redirect('/catalog/details/' + result.id)
    } catch(err) {
        res.render('create', {
            title: 'Request Error',
            body: req.body,
            errors: err.message.split('\n')
        })
    }
});


module.exports = router;