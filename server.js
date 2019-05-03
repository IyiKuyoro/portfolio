const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
app.use(express.static(__dirname + 'dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const server = http.createServer(app);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
