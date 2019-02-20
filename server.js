const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist'));
const port = process.env.PORT || 8080;
app.listen(port);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log(`Server is running on port: ${port}`);
