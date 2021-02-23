import { Service } from '@vtex/api'

/* This is necessary for sustaining compatibility with the environment `vtexcommerce`.
  It checks if the app is installed or not through this endpoint. DO NOT REMOVE IT! */
export default new Service({
  routes: {
    enabled: (ctx: any) => {
      ctx.response.status = 204
      ctx.response.body = 'My Orders app is installed in this Store.'
    },
  },
})
