import { offersController } from './controllers/offers.controller'
import { authController } from './controllers/auth.controller'

/*
 * Runs Migrations
 */
var exec  = require('child_process').exec;
var command = "./node_modules/.bin/pg-migrate up";
exec(command, function(error){
  console.error(error);
});


var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/api/v1/offers', offersController.get);
app.get('/api/v1/offers/:offerId', offersController.show);
app.get('/login', authController.login);
app.get('/me', authController.me);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


