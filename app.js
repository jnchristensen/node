var express = require('express');

var app = express();

var port = 3000;

//this means that it will look in the public folder first when looking for files so i can just do localhost:3000/css/styles.css instead of making an app.get for each file
app.use(express.static('public'));
//it will look in src/views for a file second
app.use(express.static('src/views'))

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/books', function(req, res){
    res.send('Hello Books');
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});