const { getById, deleteById } = require('../services/catalogService.js');

const router = require('express').Router();


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await getById(id);
    product[`select${product.productCategory}`] = true;

    if (req.user == undefined) {
        return res.redirect('/auth/login');
    }    
    if (req.user.id != product.owner) {
        return res.redirect('/auth/login');
    }

    res.render('delete', {
        title: 'Delete Page',
        product
    })
});

router.post('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await deleteById(id);
        res.redirect('/catalog/all');
    } catch (err) {
        res.redirect('404');
    }
});



module.exports = router;