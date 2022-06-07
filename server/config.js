require('dotenv').config({path: __dirname + '/.env'})

module.exports = {
  VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY,
  PORT: process.env.PORT || 5000
}

