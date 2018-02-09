const express = require('express');


var app = express();
var port = process.env.PORT || 2000;


app.use(express.static(__dirname + '/files/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/files/index.html');
});


app.listen(port, () => {
    console.log('server started on port ' + port);
});