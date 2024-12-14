const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authorized invalid" });
  }
  const token = authHeader.split(" ")[1];
  // console.log(authHeader);
  // console.log(token);

  try {
    const { username, userid } = jwt.verify(token, "secret");
    // const  data  = jwt.verify(authHeader, "secret");
    // return res.status(StatusCodes.OK).json({data});
    req.user = { username, userid };
    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authorized invalid" });
  }
}

module.exports = authMiddleware;
