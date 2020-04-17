import path from 'path';
import dotenvSafe from 'dotenv-safe';

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  allowEmptyValues: process.env.NODE_ENV !== 'production',
  path: root('.env'),
  sample: root('.env.example'),
});

const ENV = process.env;

console.log('ENV >>>', ENV.NODE_ENV);

export const MONGO_URL = ENV.MONGO_URL || 'mongodb://localhost/database';
export const REST_PORT = ENV.REST_PORT || 5000;
