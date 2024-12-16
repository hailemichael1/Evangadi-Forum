const express = require ('express');
const route = express.Router();
const {login, check, register} = require ('../controller/userController');
const authMiddle = require ("../middleware/authMiddleware")

// register route

   route.post('/register', register);
  
  
  //login route

  route.post("/login", login);

  //check user route
  route.get("/check", authMiddle, check);





  module.exports = route;