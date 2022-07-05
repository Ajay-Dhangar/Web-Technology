var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send("Welocme to Aj Zero Coding!");
});
app.listen(5000);