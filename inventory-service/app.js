const express = require('express')
const app = express();
const port = process.env.PORT;

app.get('/test', (req, res) => res.send('testing...'));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
