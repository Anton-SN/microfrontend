import { FastifyError, FastifyInstance, FastifyPluginOptions } from 'fastify'

const home = async (fastify: FastifyInstance, _: FastifyPluginOptions, done: (err?: FastifyError) => void)  => {
  // @ts-ignore
  fastify.get('/protected', { onRequest: [fastify.authenticate] },
    async (request) => {
      console.info('protected')
      return request.user
    }
  )

  fastify.get('/',
    async (request, reply) => {
      console.info('home')
      reply.code(200).send({ message: 'Home' });
      return request.user
    }
  )

  done();
}

export default home
