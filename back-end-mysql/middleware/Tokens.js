const { sign, verify } = require('jsonwebtoken');
const key = 'dj3bn0QV6FSBB6rw';

function signToken(items) {
    return sign(items, key);
}

module.exports = { signToken };