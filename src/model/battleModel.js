const mongoose = require('mongoose');
const DB = require('./../database');

const xbDB = DB.xbDB;

const battleSchema = mongoose.Schema({
    name: String
})

const battleModel = xbDB.model('battles', battleSchema);

module.exports = battleModel;