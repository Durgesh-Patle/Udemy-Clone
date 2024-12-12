let jwt = require('jsonwebtoken');

function roleCheck(role) {
    return (req, res, next) => {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send('Unauthorized User...........!!!');
        }
        const decodedToken = jwt.verify(token, 'nsjbjbsbusuhwihiwh');
        console.log(decodedToken,role,'DecodedToken');
        
        // if (!role.includes(decodedToken.role)) {
        if (decodedToken.role !== role) {
            return res.send('Access Denied........!!!!');
        } else {
            next();
        }
    }
};

module.exports = roleCheck

