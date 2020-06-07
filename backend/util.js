
import jwt from 'jsonwebtoken';
import config from './config';
const getToken = (user) => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,

  }, config.JWT_SECRET, {
    expiresIn: '48h'
  })
}

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: 'Invalid Token' });
      }
      req.user = decode;
      next();
      return
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied." });
  }
}

const isAdmin = (req, res, next) => {
  console.log(req.user)
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: 'Admin Token is not valid.' })
}

export {
  getToken, isAuth, isAdmin
}
































// import jwt from "jsonwebtoken";
// import config from "./config"
// const getToken = (user) =>{
//     return jwt.sign({
//         _id:user._id,
//         name:user.name,
//         email:user.email,
//         isAdmin:user.isAdmin
//     } , config.JWT_SECRET , {
//         expiresIn: "48h"
//     })
// }


// const isAuth = (req , res , next) =>{
//     const token = req.headers.authorization;
//     if(token){
//         const onlyToken = token.slice(7 , token.length);
//         jwt.verify(onlyToken , config.JWT_SECRET , (err , decode) => {
//             if(err){
//                 return res.status(401).send({msg: "Invalid Token" , token});
//             }
//             req.user = decode;
//             next();
//             return
//         });
//     }
//     else{
//     return res.status(401).send({msg : "Token is not supplied" })
//     }
// }
// const isAdmin = (req , res , next) =>{
//     const check = req.headers.authorization;
//     const adcheck = req.user.isAdmin
//     if(req.user && req.user.isAdmin){
//         return next();
//     }
//     return res.status(401).send({msg : "Admin Token is not valid" , check , adcheck});
// }

// export{
//     getToken , isAdmin , isAuth
// }

