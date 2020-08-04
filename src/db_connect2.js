const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'P@ssw0rd',
    database: 'test', //通常一個專案對應一個資料庫就好
    waitForConnections: true,
    connectionLimit: 10, //最大連線數
    queueLimit: 0
});

module.exports = pool.promise();