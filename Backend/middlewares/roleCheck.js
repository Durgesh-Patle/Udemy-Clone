const jwt = require('jsonwebtoken');
const User = require('../model/User');



function tokenCheack(req,res,next){
    let token=req.headers.authorization;
    if(token){
        next();
    }else{
        res.send('Your Account Are Not Created So You Are Not Coommet.')
    }
}


const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization) {
        try {
            token = req.headers.authorization;
            const decodedToken = jwt.verify(token, process.env.LOGINKEY);
            req.user = await User.findById(decodedToken.id).select('-password');
            console.log(req.user);
            
            if (!req.user) {
                return res.status(404).json({ message: 'User not found' });
            }
            next(); 
        } catch (error) {
            console.error('Error verifying token:', error.message);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

function Role(role) {
    return (req, res, next) => {
        const token = req.headers.authorization;

        if (!token) {
            return res.send('Unauthorized User...........!!!');
        } else {
            const decodedToken = jwt.verify(token, process.env.LOGINKEY);
            console.log(decodedToken,"Decoded Tokennnnnnnnnnnnn!!!!!!!");
            
            req.user = User.findById(decodedToken.id).select('-password');

            console.log(decodedToken, role, 'DecodedToken');

            if (!role.includes(decodedToken.role)) {
                return res.send('Access Denied........!!!!');
            } else {
                next();
            }
        }
    }
};

module.exports = { protect,Role,tokenCheack };




// 1......................................
// const jwt = require('jsonwebtoken');
// const User = require('../model/User');

// // Check if token exists
// const tokenCheck = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized, token is missing' });
//   }
//   next();
// };

// // Protect routes by verifying JWT
// const protect = async (req, res, next) => {
//   let token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized, no token' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
//     console.log(decoded, 'decoded token');

//     req.user = await User.findById(decoded.id).select('-password');
//     if (!req.user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     console.log(req.user);
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ message: 'Unauthorized, token invalid' });
//   }
// };

// // Admin-only route protection
// const adminProtect = (req, res, next) => {
//   if (!req.user) {
//     return res.status(401).json({ message: 'Unauthorized, user not found' });
//   }

//   if (req.user.role === 'admin') {
//     next();
//   } else {
//     res.status(403).json({ message: 'Access denied, admin only' });
//   }
// };

// module.exports = { tokenCheck, protect, adminProtect };


// 2.................................................................Right Code .....
// let jwt = require('jsonwebtoken');
// let User = require('../model/User')

// function roleCheck(role) {
//     return (req, res, next) => {
//         const token = req.headers.authorization;

//         if (!token) {
//             return res.send('Unauthorized User...........!!!');
//         } else {
//             const decodedToken = jwt.verify(token, process.env.LOGINKEY);
//             console.log(decodedToken,"Decoded Tokennnnnnnnnnnnn!!!!!!!");
            
//             req.user = await User.findById(decodedToken.id).select('-password');
//             console.log(req.user, "Useerrrrrrrrr");

//             console.log(decodedToken, role, 'DecodedToken');

//             if (!role.includes(decodedToken.role)) {
//                 return res.send('Access Denied........!!!!');
//             } else {
//                 next();
//             }
//         }
//     }
// };


// module.exports = roleCheck