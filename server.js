// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2010;

app.get('/', (req, res) => {
  res.send('Hello World1!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
