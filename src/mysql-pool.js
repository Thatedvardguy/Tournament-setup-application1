import mysql from 'mysql';

// Create a pool of connections to the mysql server.
// Read more about connection pools here: https://en.wikipedia.org/wiki/Connection_pool
export let pool = mysql.createPool({
  host: 'mysql-ait.stud.idi.ntnu.no',
  connectionLimit: 1, // Limit the number of simultaneous connections to avoid overloading the mysql server
  user: 'troda', // Replace "username" with your mysql-ait.stud.idi.ntnu.no username
  password: 'FCjALiCU', // Replae "password" with your mysql-ait.stud.idi.ntnu.no password
  database: 'troda', // Replace "username" with your mysql-ait.stud.idi.ntnu.no username
});
