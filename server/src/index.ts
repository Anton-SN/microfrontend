import fastify from 'fastify'
import mongoose from 'mongoose';
import fastifyMongoDB from '@fastify/mongodb'
import { UserModel, UserType } from './models'


const server = fastify()

const url = "mongodb+srv://lemondev:z3DYiEHhqwffTeGS@users.iilcmal.mongodb.net/?retryWrites=true&w=majority";

server.register(fastifyMongoDB, { forceClose: true, url })
mongoose.connect(url)
  .then(() => console.info('MongoDB connected'))
  .catch((err) => console.info('Error connecting to MongoDB:', err));

server.get('/ping', async () => {
  return 'pong\n'
})

server.post('/signup', async (req, reply) => {
  try {
    const user = new UserModel(req.body)
    await user.save();
    reply.code(201).send({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error creating user' });
  }
})

server.post('/login', async (req, reply) => {
  try {
    const { email, password } = req.body as UserType;
    const user = await UserModel.findOne({ email, password })

    if (!user) {
      reply.code(401).send('Invalid email or password');
      return;
    }

    reply.send({ user });
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
