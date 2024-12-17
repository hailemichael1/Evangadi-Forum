const { StatusCodes } = require("http-status-codes");
const jwt= require("jsonwebtoken");


function authMiddle(req, res, next) {
    const authToken =  req.headers.authorization;
   if (!authToken || !authToken.startsWith('Bearer')) {
    return res.status(StatusCodes.BAD_REQUEST).json({msg:"provide token"})
   }
   const token=authToken.split(' ')[1]
   
   try {
 const data = jwt.verify(token, process.env.JWT_SIGN);
   req.user = data;
     next();
   } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({msg:"invalid token"});
   }
}
module.exports = authMiddle;