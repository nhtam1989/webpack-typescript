// require('dotenv').config();
import mysql from 'mysql';
console.log("-------111",process.env.NODE_ENV );
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "laravel-api"
});

if(process.env.NODE_ENV == 'development'){
  connection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });
}
