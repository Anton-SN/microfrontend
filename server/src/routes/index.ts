import fp from 'fastify-plugin';
import { FastifyInstance, FastifyError, FastifyPluginOptions } from 'fastify'
import auth from './auth'
import home from './home'

const root = fp((fastify: FastifyInstance, opts: FastifyPluginOptions, done: (err?: FastifyError) => void) => {
  fastify.register(auth);
  fastify.register(home)

  done();
})

export default root
