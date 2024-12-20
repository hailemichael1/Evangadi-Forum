const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 5550;

const cors = require('cors');
// ADD LOGGING ON EVERY REQUEST USING MORGAN
app.use(morgan('dev'));

app.use(cors());
// db connection
const dbConnection = require('./db/dbConfig');

// authorization middleware
const authMiddleware = require('./middleware/authMiddleware');

// user route middleware file
const UserRoutes = require('./routes/userRoute');

//do questions middleware
const questionsRoutes = require('./routes/questionRoute');
// answers middleware
const answersRoutes = require('./routes/answerRoute');
//json middleware to extract json data
app.use(express.json());

// user route middleware
app.use('/api/users', UserRoutes);
//questions routes middleware
app.use('/api/questions', authMiddleware, questionsRoutes);

//answer routes middleware

app.use('/api/answers', authMiddleware, answersRoutes);

app.use(
  '*',
  app.all('*', (req, res, next) => {
    console.log(req.url);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'An unexpected error occurred.' });
  })
);

async function start() {
  try {
    const result = await dbConnection.execute("select'test' ");
    app.listen(port);
    console.log('database connection established');
    console.log(`listening on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
