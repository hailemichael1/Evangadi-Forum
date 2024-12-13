// db connection
const dbConnection = require('../db/dbConfig');
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes'); 
const jwt =require('jsonwebtoken')

async function register(req, res) {
    const { username, firstname, lastname, email, password } = req.body;

    // Check if all required fields are provided
    if (!email || !password || !firstname || !lastname || !username) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please provide all required fields." });
    }

    try {
        // Check if user already exists (by username or email)
        const [user] = await dbConnection.query("SELECT username, userid FROM users WHERE username = ? OR email = ?", [username, email]);
        if (user.length > 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Already registered" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Password must be at least 8 characters" });
        }

        // Encrypt the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert the new user into the database
        await dbConnection.query("INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)", 
                                  [username, firstname, lastname, email, hashedPassword]);

        return res.status(StatusCodes.CREATED).json({ msg: "User created successfully" });

    } catch (error) {
        console.error(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong, please try again later." });
    }
}

 async function login(req, res) {
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg:"please enter all required fields"});
    }
    try{
        const [user] = await dbConnection.query("select username,userid,password from users where email=?",[email])
        if(user.length==0){ 
            return res.status(StatusCodes.BAD_REQUEST).json({ msg:"invalid credential"});

        }
        const isMatch = await bcrypt.compare(password,user[0].password);
        if(!isMatch){
            return res.status(StatusCodes.BAD_REQUEST).json({ msg:"invalid credential"});
        }
        const username = user[0].username
        const userid = user[0].userid
        const token = jwt.sign({username,userid},"secret",{expiresIn:"2d"} )
        return res.status(StatusCodes.OK).json({msg:"user login successful",token})
        

    }catch(error){
        console.error(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong, please try again later." });

    }
    
}

function checkUser(req, res) {
    res.send("check user");
}

module.exports = { register, login, checkUser };
