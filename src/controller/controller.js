const express = require('express');
const path = require('path');

exports.home = async function(req, res){
    res.sendFile(path.join(__dirname, './../../public/template', 'index.html'));
}
exports.api = async function(req, res){
    res.status(200).json({
        name: "dheeraj",
        roll: 11,
        vill: "bhalni"
    })
}

