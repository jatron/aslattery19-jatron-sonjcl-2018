// main file (we run this javascript program when we start the server)

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Lets Eat!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))