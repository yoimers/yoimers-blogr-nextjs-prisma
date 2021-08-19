// @ts-ignore
const express = require('express')
const next = require('next')
const proxy = require('http-proxy-middleware')

// @ts-ignore
const port = 3000
// @ts-ignore
const dev = process.env.NODE_ENV !== 'production'
const host = '0.0.0.0'
// const API_URL = process.env.API_URL || 'http://localhost:8000/graphql'
const API_URL = process.env.API_URL || '{APIのURL}'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(
    '/graphql',
    (req, res) =>{
    return proxy({
      target: API_URL,
      changeOrigin: true
    })(req, res)
    }
  );

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, host, err => {
    if (err) throw err
    console.log(`> Ready on http://${host}:${port}`)
  })
})