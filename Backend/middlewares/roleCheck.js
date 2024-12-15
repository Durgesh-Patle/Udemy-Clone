let jwt = require('jsonwebtoken');
let User = require('../model/User')

function roleCheck(role) {
    return (req, res, next) => {
        const token = req.headers.authorization;
        
        if (!token) {
            return res.send('Unauthorized User...........!!!');
        } else {
            const decodedToken = jwt.verify(token, 'nsjbjbsbusuhwihiwh');
            req.user = User.findById(decodedToken.id).select('-password');
            console.log(req.user,"Useerrrrrrrrr");
            
            console.log(decodedToken, role, 'DecodedToken');

            if (!role.includes(decodedToken.role)) {
                return res.send('Access Denied........!!!!');
            } else {
                next();
            }
        }
    }
};


module.exports = roleCheck

// 2......................................
// const jwt = require('jsonwebtoken');
// const User = require('../model/User');


// const protect = async (req, res, next) => {
//   let token;

//   if (req.headers.authorization) {
//     try {
//       token = req.headers.authorization;
//       const decoded = jwt.verify(token,'nsjbjbsbusuhwihiwh');
//       console.log(decoded,"decoded token");
      
//       req.user = await User.findById(decoded.id).select('-password');
//       next();
//     } catch (error) {
//       res.status(401).json({ message: 'Not authorized, token failed' });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: 'Not authorized, no token' });
//   }
// };


// const adminProtect = (req, res, next) => {
//   if (req.user.role === 'admin') {
//     next();
//   } else {
//     res.status(403).json({ message: 'Access denied, admin only' });
//   }
// };

// module.exports = { protect, adminProtect };

