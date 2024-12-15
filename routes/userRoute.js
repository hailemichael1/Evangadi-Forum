const express = require ('express');
const route = express.Router();
const {login, check, register} = require ('../controller/userController')

// register route

route.post('/register', register);
  
  
  //login route

  route.post("/login", login);

  //check user route
  route.get("/check", check);





  module.exports = route;