const express = require('express');
const app = express();

app.use(require('cors')());
app.use(express.json());
app.use(require('./middleware/logger'));

app.use('/', require('./routes/short'));
app.use('/api/v1/hyperlinks', require('./routes/hyperlinks'));
app.use('/api/v1/timestamps', require('./routes/data'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
