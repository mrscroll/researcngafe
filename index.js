const express = require('express')
var logger = require('morgan');

const app = express()

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("site"));
app.use('/', indexRouter);
app.use('/login', loginRouter);

app.listen(80, () => {
    console.log("server started")
})

