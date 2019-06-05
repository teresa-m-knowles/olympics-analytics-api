var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');


var indexRouter = require('./routes/index');
var olympiansRouter = require('./routes/api/v1/olympians');
var statsRouter = require('./routes/api/v1/stats');
var eventsRouter = require('./routes/api/v1/events');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/api/v1/olympians', olympiansRouter)
app.use('/api/v1/olympian_stats', statsRouter)
app.use('/api/v1/events', eventsRouter)

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

module.exports = app;
