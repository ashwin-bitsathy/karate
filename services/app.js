const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/test', (req, res) => {
    var karate = require('./karate');
    karate.version = '1.3.0';
    karate.config.dir = 'services'
    karate.exec("-T=5 services");
    res.send('done')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})