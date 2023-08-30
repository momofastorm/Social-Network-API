const express = require('express');
const db = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

db.once('open',() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});