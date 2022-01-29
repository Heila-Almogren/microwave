const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/personal-website'));

app.get('/*', function (request, response) {
  // response.sendFile(path.join(__dirname, '/dist/microwave/index.html'));
  response.sendFile(path.join(__dirname, '/src/index.html'));
});


app.listen(process.env.PORT || 8080, ()=> {console.log("App is working")});
