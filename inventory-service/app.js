const express = require('express')
const pg = require('pg');

const app = express();
const port = process.env.PORT;
const client = new pg.Client({
    host: 'psql',
    user: 'root',
    password: 'password',
    database: 'inventory'
});

client.connect()
    .then(() => console.log('connected to DB'))
    .catch((err) => console.error(`Error connecting to DB: ${err}`));


app.get('/test', (req, res) => res.send('testing...'));
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
