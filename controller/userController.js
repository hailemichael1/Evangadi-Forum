const express = require ("express");
const db = require ("../db/dbConfig");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");


//register controller
async function register(req, res) {
  const {username,password, email, firstname, lastname} = req.body;

  if (!username || !password || !email || !firstname || !lastname) {
  return res.status(StatusCodes.BAD_REQUEST).json({msg:"please provide all required fields"});
  }

  if (password.length < 8) {
    return res.status(StatusCodes.BAD_REQUEST).json({msg:"password must be at least 8 characters"})
  }
try {
    const [user] = await db.query(
        "SELECT * FROM users WHERE username = ? OR email = ?",
        [username, email]
      );
      if (user.length > 0) {
        return res.status(StatusCodes.CONFLICT).json({msg:"user already exist"})
      }

const salt = await bcrypt.genSalt(5);
const hashedPassword = await bcrypt.hash(password, salt);



const result = await db.query(
  "INSERT INTO users (username, password, email, firstname, lastname) VALUES (?, ?, ?, ?, ?)",
  [username, hashedPassword, email, firstname, lastname]
);
return res.json({msg:"user registerd"});

} catch (error) {
    console.log(error.message)
}




}



//login controller
async function login(req, res) {
    
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({msg:"provide all required fields"});
  }
  try {
    const [user] = await db.query("select * from users where  email=? " ,[email]);
  if (user.length == 0) {
    return res.status(StatusCodes.UNAUTHORIZED).json({msg:"invalid username or password"})
  }
  const isMatch= await bcrypt.compare(password, user[0].password);
  if (!isMatch ) {
   return res.status(StatusCodes.UNAUTHORIZED).json({msg:"invalid password"})
  }

 const username = user[0].username
 const userid = user[0].userid
 const token = jwt.sign({username, userid},process.env.JWT_SIGN, {expiresIn:"1d"});
        return res.status(200).json({token:token,username});
  } catch (error) {
    console.log(error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'something went wrong'})
  }
 }

  //check controller
  function check(req, res) {
    res.status(StatusCodes.OK).json({msg:req.user})
  }

  module.exports = {login, check, register};