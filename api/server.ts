import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.get('/hello', (req, res) => {
  res.send({ data: 'Hello, World!' });
});

app.get('/lionel', (req, res) => {
  res.send({ data: "Hello, is it me you're looking for?" });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://${process.env.HOST}:${process.env.PORT}`);
});
