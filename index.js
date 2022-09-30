const express = require('express')
require('./db-config');
const product = require('./schema');
const app = express()
const port = process.env.PORT || 4500;

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await product.find();
    console.log(data);
    res.send(data);
});

app.post('/insert', async (req, res) => {
    console.log(req.body)
    let data = new product(req.body);
    let result = await data.save();
    res.send(result);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))