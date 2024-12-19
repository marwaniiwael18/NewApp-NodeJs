var express = require('express')
var router = express.Router()
const { osInfo, osCpus, osCpusById } = require('./osService')

router.get('/', osInfo)
router.get('/d', osCpus)
router.get('/cpus/:id', osCpusById)

module.exports = router