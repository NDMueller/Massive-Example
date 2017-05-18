var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

var app = module.exports = express();
app.use(bodyParser.json());

var db = massive.connectSync({
  connectionString: 'postgres://localhost/app'
});
app.set('db', db);

var mainCtrl = require('./controllers/mainCtrl.js');

app.get('/api/data', mainCtrl.getData);

var port = 3000;
app.listen(port, function() {
  console.log('Listening on port ', port);
})
