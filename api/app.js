var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var csrf = require('csurf')
var bodyParser = require('body-parser')
var cors = require('cors')

var origin = process.env.ORIGIN_URL || process.env.OPENSHIFT_NODEJS_ORIGIN_URL || "http://localhost:3000"

const corsOptions = {
    origin: origin,
    credentials: true,
    optionsSuccessStatus: 200,
};

var formRouter = require('./routes/form')
var previewRouter = require('./routes/preview')
var saveDraftRouter = require('./routes/saveDraft')
var updateDraftRouter = require('./routes/updateDraft')
var getDraftRouter = require('./routes/getDraft')
var getSentRouter = require('./routes/getSent')


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(helmet());


app.use('/api/form', formRouter)
app.use('/api/preview',previewRouter)
app.use('/api/saveDraft', saveDraftRouter)
app.use('/api/saveDraft', updateDraftRouter)
app.use('/api/getDrafts', getDraftRouter)
app.use('/api/getSent', getSentRouter)

module.exports = app;
