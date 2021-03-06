const express = require('express')
const router = express.Router()
const Bot = require('./../bot')

const controller = require('./../controllers/index')

router.get('/', function(req, res, next) {
    
    Bot.launch();
    res.send('hello world')
})

router.get('/bot', function(req, res, next) {
    Bot.launch();
    res.json({
        greet: 'Bot has send a message'
    })
})

//this new route
router.get('/test', function(req, res, next) {
    Bot.launch();
    res.json({
        greet: 'content'
    })
})

router
    .get('/users', controller.user.get)
    .get('/user/:id', controller.user.getById)

module.exports = router;