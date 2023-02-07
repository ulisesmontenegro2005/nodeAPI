import express from 'express';
import mongo from './../database/mongoClass.js';
const database = new mongo();
database.connect()

// DIRNAME //
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ------- //   

const routes = express.Router()

routes.get('/', async (req, res) => {
    database.getAll()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
})

routes.get('/add', (req, res) => {
    res.sendFile(__dirname + '/products.html')
})

routes.post('/add', async (req, res) => {
    const { name, price, stock } = req.body;

    database.addProduct(name, price, stock);

    res.redirect('/api')
})

export default routes;