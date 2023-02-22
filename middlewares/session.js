const { verifyToken } = require('../services/userService.js');

// create middleware who will read cookie
module.exports = () => (req, res, next) => {
    const token = req.cookies.token;
    // const token = req.cookies['token'];
    if (token) {
        // console.log(token);
        try {
            const userToken = verifyToken(token);
            // console.log(userToken);
            // console.log('Read successul email:', userToken.email);
            req.user = userToken;
            // начин да вкарваме нещо в глобалния контекст, само чрез res.locals и име на променлива
            res.locals.username = userToken.username;
            res.locals.email = userToken.email;
        } catch (err) {
            // console.log('Invalid token');
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }

    next();
}