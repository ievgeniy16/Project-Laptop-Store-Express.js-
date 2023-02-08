const { getById, update } = require('../services/catalogService.js');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await getById(id);
    product[`select${product.productCategory}`] = true;

    res.render('edit', {
        title: 'Edit',
        product
    })
});

router.post('/:id', async (req, res) => {
    const id = req.params.id;

    const product = {
        id: id,
        name: req.body.name,
        display: req.body.display,
        processor: req.body.processor,
        graphic: req.body.graphic,
        ramMemory: req.body.ramMemory,
        totalCapacity: req.body.totalCapacity,
        operatingSystem: req.body.operatingSystem,
        price: Number(req.body.price),
        productCategory: req.body.productCategory,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        img4: req.body.img4,
        img5: req.body.img5,
        img6: req.body.img6,
        description: req.body.description
    };

    try {
        await update(id, product);
        res.redirect('/catalog/details/' + id);
    } catch (err) {
        res.redirect('404')
    }
});


module.exports = router;