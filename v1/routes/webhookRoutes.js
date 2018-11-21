const express = require('express');
const router = express.Router();
const buildService = require('../services/buildService')

router.post('/', buildService.update);

module.exports = router