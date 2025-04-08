import pg from 'pg';

console.log('Hey');
const connection = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

connection.on('connect', (client) => {
  console.log('Connected to the database');
});

connection.on('error', (e) => {
  console.log('connection error: ', e);
});

connection.query('SELECT 1 + 1 ');
export default connection;
