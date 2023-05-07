import { FastifyError, FastifyInstance, FastifyPluginOptions } from 'fastify'
import { UserModel, UserType } from '../models'

const auth = async (fastify: FastifyInstance, _: FastifyPluginOptions, done: (err?: FastifyError) => void)  => {
  fastify.post('/signup', async (req, reply) => {
    try {
      const { email, password } = req.body as UserType;
      const user = new UserModel({ email, password })
      const accessToken = fastify.jwt.sign({ email }, { expiresIn: '15m' })
      const refreshToken = fastify.jwt.sign({ email }, { expiresIn: '7d' })
      await user.save();
      reply.code(201).send({ message: 'User created successfully', accessToken, refreshToken });
    } catch (error) {
      console.error(error);
      reply.code(500).send({ message: 'Error creating user' });
    }
  })

  fastify.post('/login', async (req, reply) => {
    try {
      const { email, password } = req.body as UserType;
      // @ts-ignore
      const user = await UserModel.findByCredentials({ email, password })

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

  fastify.post('/auth/refresh', async (request, reply) => {
    const { refreshToken } = request.body as { refreshToken: string };

    try {
      const decoded = fastify.jwt.verify(refreshToken);
      // @ts-ignore
      const { email } = decoded;

      const accessToken = fastify.jwt.sign({ email }, { expiresIn: '15m' })
      const newRefreshToken = fastify.jwt.sign({ email }, { expiresIn: '7d' })

      return reply.send({ accessToken, refreshToken: newRefreshToken });
    } catch (error) {
      return reply.status(401).send({ message: 'Invalid token' });
    }
  });

  done();
}

export default auth
