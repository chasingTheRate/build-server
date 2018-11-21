const express = require('express')
const router = express.Router()
const webhookRoutes = require('./webhookRoutes');

router.use('/webhooks', webhookRoutes)

module.exports = router