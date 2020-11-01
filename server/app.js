/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.get('/api', (req, res) => {
  res.json({
    message: 'Wellcome to the API'
  })
})

app.post('/api/post', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'Post created...',
        authData
      })
    }
  })

  res.json({
    message: 'Post created...'
  })
})

app.post('/api/login', (req, res) => {
  //Mock User
  const user = {
    id: 1,
    username: 'abner.fonseca',
    email: 'db@db.com',
    password: '1234'
  }

  const loginData = req.body

  console.log(req)

  if (loginData.login === user.email && loginData.password === user.password) {
    jwt.sign({ user }, 'secretkey', (err, token) => [
      res.json({
        token
      })
    ])
  }
})

//format token

//verify token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')

    const bearerToken = bearer[1]

    req.token = bearerToken

    next()
  } else {
    res.sendStatus(403)
  }
}

app.listen(3333, () => console.log('Server start on port 3333'))
