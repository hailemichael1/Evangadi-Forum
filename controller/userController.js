const express = require ("express");
const db = require ("../db/dbConfig");
const bcrypt = require ("bcrypt")


//register controller
async function register(req, res) {
  const {username,password, email, firstname, lastname} = req.body;

  if (!username || !password || !email || !firstname || !lastname) {
  return res.status(400).json({msg:"please provided all required fields"});
  }

  if (password.length < 8) {
    return res.status(400).json({msg:"password must be at least 8 characters"})
  }
try {
    const [user] = await db.query(
        "SELECT * FROM users WHERE username = ? AND email = ?",
        [username, email]
      );
      if (user.length > 0) {
        return res.status(400).json({msg:"user already exist"})
      }
} catch (error) {
    console.log(error.message)
}

const salt = await bcrypt.genSalt(5);
const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const result = await db.query(
        "INSERT INTO users (username, password, email, firstname, lastname) VALUES (?, ?, ?, ?, ?)",
        [username, hashedPassword, email, firstname, lastname]
      );
 return res.json({msg:"user registerd"});
  } catch (error) {
    console.log(error.message);
  }
  

}



//login controller
function login(req, res) {
    return res.send("login user")
  }

  //check controller
  function check(req, res) {
    return res.send("check user")
  }

  module.exports = {login, check, register};