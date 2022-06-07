const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')
const cert = fs.readFileSync(path.join(__dirname, 'cert', 'localhost+1.pem'))
const key = fs.readFileSync(path.join(__dirname, 'cert', 'localhost+1-key.pem'))
const {PORT} = require('./config')
const app = express()

app.use( express.json() )
app.use( express.static( path.join(__dirname, '..', '/build') ) )



app.get('*', (req,res) => {
  res.sendFile('./index.html', {root: path.join(__dirname, '..', '/build')})
})

https.createServer({key,cert}, app)
  .listen(PORT, console.log(`Server started on port ${PORT}!`))