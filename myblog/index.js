var path = require('path')
var express = require('express')
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.listen(3000);
