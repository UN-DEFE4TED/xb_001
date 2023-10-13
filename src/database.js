const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config({path: './.env'});

const CONN_STR = process.env.CONN_STR;

exports.xbDB = mongoose.createConnection(`${CONN_STR}/XstreamBattle`);
