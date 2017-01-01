var subdomain = require('express-subdomain');
var express = require('express');
var app = express();

app.set('subdomain offset', 1);
var router = express.Router();

//api specific routes
router.get('/', function(req, res) {
   res.send('Welcome to our API!');
});

router.get('/users', function(req, res) {
    res.json([
        { name: "Brian" }
    ]);
});

app.use(subdomain('api', router));
app.listen(3000);
