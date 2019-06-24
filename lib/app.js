const express = require('express');
const app = express();

app.use(require('cors')());
app.use(express.json());

app.use('/short', require('./routes/short'));
app.use('/api/v1/hyperlinks', require('./routes/hyperlinks'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
