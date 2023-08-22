const Pool = require('pg').Pool
require('dotenv').config()


console.log('USERNAME:', process.env.USERNAME);
console.log('HOST:', process.env.HOST);

const pool =new Pool({
    user:process.env.USERNAME,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port:process.env.DBPORT,
    database:'todoapp'
})

module.exports = pool;