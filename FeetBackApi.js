const bodyParser = require('body-parser');
const BodyParser = require(body-parser);
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const Express = require('express');
const ObjectID = require('mongodb').ObjectID;
let url = "mongodb://localhost:27017/"
const app = Express();