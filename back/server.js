const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const passwordService = require('./password')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const middleware = (req, res, next) => {
    const { email, password } = req.body;
    (!email || !password)
        ? res.status(422).json({
            code: 2000,
            msg: 'REQUIRED'
        })
        : next()
}

app.post('/register', middleware, (req, res) => {
    const { email, password } = req.body
    const passwordLength = passwordService.length(password);
    (passwordLength > 6)
        ? res.json({
            code: 1000,
            msg: 'SAVED'
        })
        : res.status(422).json({
            code: 3000,
            msg: 'INVALID'
        })
})

app.listen(port, () => {
    console.log('Server listen port: ', port)
})