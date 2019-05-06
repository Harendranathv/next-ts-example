import express from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: '.' })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

async function init() {
  try {
    await app.prepare()

    const server = express()

    server.get('*', async (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) {
        throw err
      }

      console.log('NODE_ENV:', process.env.NODE_ENV)
      console.log('PORT:', port)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

init()
