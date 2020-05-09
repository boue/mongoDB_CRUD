const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();
const collection = 'todo';

app.use(bodyParser.json());