import mongoose from 'mongoose';
// import { dbPath } from '../config';
import { dbPath } from '../sec';

require('./schema/list');
require('./schema/user');

export const database = () => {
  mongoose.set('debug', true);

  mongoose.connect(dbPath);

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(dbPath);
  });

  mongoose.connection.on('error', err => console.log(err));

  mongoose.connection.on('open', async () => console.log('mongo:', dbPath));
}

database()