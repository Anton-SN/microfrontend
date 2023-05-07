import fastify from 'fastify'
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import jwt from './plugins/jwt';
import root from './routes';

dotenv.config();

const server = fastify({ logger: false })

mongoose.connect(process.env.MONGO_URL!)
  .then(() => console.info('MongoDB connected'))
  .catch((err) => console.info('Error connecting to MongoDB:', err));

server.register(jwt)
server.register(root)

server.get('/ping', async () => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.info(`Server listening at ${address}`)
})
