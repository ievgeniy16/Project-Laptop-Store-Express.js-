const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('create', {
        title: 'Create'
    })
});


module.exports = router;