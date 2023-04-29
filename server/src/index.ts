import fastify from 'fastify'
import mongoose from 'mongoose';
import { UserModel } from './models'

const server = fastify()

const url = "mongodb+srv://lemondev:z3DYiEHhqwffTeGS@users.iilcmal.mongodb.net/?retryWrites=true&w=majority";

server.register(require('@fastify/mongodb'), { forceClose: true, url })
mongoose.connect(url)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

server.get('/ping', async () => {
  return 'pong\n'
})

server.post('/users', async function( req, reply) {
  try {
    const user = new UserModel(req.body)
    await user.save();
    reply.code(201).send({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error creating user' });
  }
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.info(`Server listening at ${address}`)
})
