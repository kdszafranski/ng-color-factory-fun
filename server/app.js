var express = require('express');
var app = express();
var path = require('path');
var colorRouter = require('./routes/colors');

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

app.use('/colors', colorRouter);
// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
