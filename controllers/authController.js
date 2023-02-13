const { register, login } = require('../services/userService.js');

const router = require('express').Router();



router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    })
});

router.post('/register', async (req, res) => {
    try {
        if (req.body.email.trim() == '' || req.body.password.trim() == '' || req.body.username.trim() == '') {
            throw new Error('All fields are required!');
        }
        if (req.body.password.trim() != req.body.repass.trim()) {
            throw new Error('Passwords don\'t match!');
        }
        if (req.body.password.length < 5) {
            throw new Error('Passwords must be at 5 characters long')
        }

        const token = await register(req.body.email, req.body.username, req.body.password);
        // save token
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        // const errors = [err.message];
        const errors = error.message.split('\n');
        console.log(errors);

        res.render('register', {
            title: 'Register',
            errors,
            body: {
                email: req.body.email,
                username: req.body.username
            }
        })
    }
});




router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    })
});

router.post('/login', async (req, res) => {
    try {
        
        if (req.body.email.trim() == '' || req.body.password.trim() == '') {
            throw new Error('All fields are required!');
        }

        const token = await login(req.body.email, req.body.password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = error.message.split('\n');
        res.render('login', {
            title: 'Login',
            errors,
            body: {
                email: req.body.email
            }
        })
    }
});


router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});



module.exports = router;