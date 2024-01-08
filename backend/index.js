const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const uri = "mongodb+srv://nguyenhd8414:n57eSDh1SJa2Gy5h@cluster0.qeevz0s.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const port = 3001;

mongoose.connect(uri).then(() => console.log('Connected!'));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Secret key for JWT (change this in production)
const secretKey = 'yourSecretKey';

// Sample user data (replace this with a database in a real-world scenario)
const users = [
  { id: 2, username: 'nguyenhd', password: 'khongbiet123' },
];

// Endpoint for user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body, "logggg")
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate a JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
