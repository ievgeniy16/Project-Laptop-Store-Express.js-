const { getById } = require('../services/catalogService.js');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('cart', {
        title:"Cart is Empty"
    })
})

router.get('/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await getById(productId);
 
    res.render('cart', {
        title: 'Cart',
        product
    });
});


module.exports = router;