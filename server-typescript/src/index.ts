import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDatabase } from './database';
import { todoGetAll, todoPost, todoDelete } from './modules';

const app = express();

(async () => {
  try {
    await connectDatabase();
  } catch (error) {
    console.log('Could not connect to database', { error });
    throw error;
  }

  app.use(cors());
  app.use(bodyParser.json());

  app.get('/api/todos', todoGetAll);
  app.post('/api/todos', todoPost);
  app.delete('/api/todos/:id', todoDelete);

  app.listen(5000, () => {
    console.log('Server started');
  });
})();
