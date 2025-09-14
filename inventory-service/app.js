const express = require('express')
const pg = require('pg');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new pg.Client({
    host: 'psql',
    user: 'root',
    password: 'password',
    database: 'inventory'
});

client.connect()
    .then(() => console.log('connected to DB'))
    .catch((err) => console.error(`Error connecting to DB: ${err}`));

app.post('/inventory/adjustment', async (req, res) => {
    const { sku, delta, reason } = req.query;
    const deltaInt = parseInt(delta, 10);

    try {
        client.query('INSERT INTO inventory_service.ledger (sku, delta, reason) VALUES($1, $2, $3)', [sku, deltaInt, reason]);
    } catch (err) {
        console.error(`Error attempting to insert to ledge: ${err}`)
        res.status(500).send();
    }
    res.status(200).send();
});

app.get('/inventory/availability', async (req, res) => {

});


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
