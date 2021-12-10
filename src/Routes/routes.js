const express = require('express')
const app = express()

app.use(require('./Project'));
app.use(require('./User'));
app.use(require('./advanced'))
app.use(require('./inscription'))
app.use(require('./login'))
app.use(require('./objetive'))


module.exports = app;