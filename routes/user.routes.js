const router = require('express').Router()
const usercontroller = require('../controller/user.controller')

router.post('/registration',usercontroller.register)
router.post('/login',usercontroller.login)

module.exports = router