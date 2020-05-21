var jwt = require('jsonwebtoken');

const secret = 'iIsInR5cCI6IkpXVCJ9eyJhbGciOiJIUzI1P'

const sign = payload => jwt.sign(payload, secret, { expiresIn: 43200 });//12h
const verify = token => jwt.verify(token, secret);

module.exports = {sign, verify};