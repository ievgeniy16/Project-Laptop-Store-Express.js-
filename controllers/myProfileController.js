const { myPublication } = require('../services/catalogService.js');

const router = require('express').Router();


router.get('/', async (req, res) => {
    const ownerId = req.user.id;
    const catalog = await myPublication(ownerId);

    res.render('myProfile', {
        title: 'My Profile',
        count: catalog.length,
        catalog
    })
});


module.exports = router;