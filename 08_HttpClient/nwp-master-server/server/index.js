const express = require('express')
const bodyParser = require('body-parser');
const app = express()
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

app.use(bodyParser());
app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/product', require('./products'));

app.listen(3000, () => console.log('App Server listening on port 3000!'));