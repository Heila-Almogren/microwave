const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/microwave'));

app.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/dist/microwave/index.html'));
});

app.listen(process.env.PORT || 8080);
