import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env.DATABASE_URL);
import express from 'express';
// import connection from './db_connection';

console.log('211122');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/health', (req, res, next) => {
  res.json({ status: 'healthy' });
});

app.get('/', (req, res, next) => {
  res.json(`Hello, time is ${new Date().toISOString()}`);
});

// connection.query('SELECT 1 + 1').then((res) => {
//   console.log('res', res.rows[0]);
//   console.log(res.rows[0]);
// });

const a = 3;
const b = 2;
