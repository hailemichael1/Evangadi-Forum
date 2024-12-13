const dbconnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

async function register(req, res) {
  const { username, password, firstname, lastname, email } = req.body;
  if (!username || !password || !firstname || !lastname || !email) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "please Provide all the required information",
    });
  }
  try {
    const [user] = await dbconnection.query(
      "select username,email from usertable where username=? or email=?",
      [username, email]
    );
    if (user.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Already registered" });
    }
    if (password.length < 8) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Pass word length should be at least 8 characters" });
    }
    // encrypting pass word

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    await dbconnection.query(
      "INSERT INTO userTable (username,firstname,lastname,password,email) VALUES (?,?,?,?,?)",
      [username, firstname, lastname, hashedpassword, email]
    );
    return res.status(StatusCodes.CREATED).json({ msg: "user created" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "some thing goes wrong ,try again later" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please fill all required fields" });
  }
  try {
    const [user] = await dbconnection.query(
      "select username,email,password from usertable where  email=?",
      [email]
    );
    return res.json({ user: user });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "some thing goes wrong ,try again later" });
  }
}

async function checkUser(req, res) {
  res.send("Check User");
}

module.exports = { register, login, checkUser };
