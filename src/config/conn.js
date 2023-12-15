const mysql = require('mysql2');
// require('dotenv').config(); 

const pool = mysql.createPool({
    user: 'root',
    password: 'Lobo_marino32',
    host: 'localhost',
    port: 3306,
    database: 'funkoshop',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if (err) {
        console.log('Hubo un error al conectarse a la DB: ' + err);
    } else {
        console.log('Conexión a la Base de Datos exitosa');
        conn.release();
    }
});

module.exports = {
    conn: pool.promise()
}