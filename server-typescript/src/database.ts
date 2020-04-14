import mongoose from 'mongoose';

declare module 'mongoose' {
  interface ConnectionBase {
    host: string;
    port: number;
    name: string;
  }
}

export function connectDatabase() {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.connection
      .on('error', (error) => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      .once('open', () => resolve(mongoose.connections[0]));

    mongoose.connect('mongodb://localhost/rest-typescript-golang', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  });
}
