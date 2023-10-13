const express = require('express');

const router = express.Router();
const controller = require('./../controller/controller')

router.route('/')
    .get(controller.home)

router.route('/api')
    .get(controller.api)


module.exports = router;