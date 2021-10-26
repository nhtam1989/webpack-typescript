import mysql from 'mysql';

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "laravel-api"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

