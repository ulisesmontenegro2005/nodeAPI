import express from 'express';
import mongo from './../database/mongoClass.js';
const database = new mongo();
database.connect()

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

routes.post('/add', database.addProduct)

routes.post('/delete', database.deleteProduct)

export default routes;