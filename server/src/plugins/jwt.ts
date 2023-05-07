import fp from 'fastify-plugin';
import fastifyJwt from '@fastify/jwt'
import { FastifyReply, FastifyRequest, FastifyInstance, FastifyError, FastifyPluginOptions } from 'fastify'

const jwt = fp((fastify: FastifyInstance, opts: FastifyPluginOptions, done: (err?: FastifyError) => void) => {
  fastify.register(fastifyJwt, { secret: process.env.SECRET_KEY! })

  fastify.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply)  => {
    try {
      // @ts-ignore
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })

  done();
})

export default jwt
