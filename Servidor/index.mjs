import express from 'express'

const PORT = 3000

const app = express()
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json; charset=UTF-8' && req.headers['content-type'] !== 'application/json') return next()

  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    req.body = JSON.parse(body)
    next()
  })
})

app.get('/getTemperature', (req, res) => {
  res.send('The temperature is 24 degrees Celsius')
})

app.get('/activateIrrigation', (req, res) => {
  res.send('Irrigation has been activated')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

/*
  Consulte temperatura
  Activar los riegos
*/
