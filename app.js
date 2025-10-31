const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/welcome', (req, res) => {
  console.log(`Request received: ${req.method} ${req.path}`);
  res.json({ message: 'Welcome to the Demo Web Application!' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
