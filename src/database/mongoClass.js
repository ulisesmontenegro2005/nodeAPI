import mongoose from 'mongoose';
import * as model from './mongo.js';

const URL = 'mongodb+srv://ulisesmontenegro:Dragonci170605@backendpractice.enqgm9k.mongodb.net/databaseNodeAPI?retryWrites=true&w=majority';

export default class mongo {
    async connect () {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async getAll () {
        let data;

        data = await model.data.find({}, {_id:0, __v:0});
    
        return data;
    }

    async addProduct (req, res) {
        let {name, price, stock} = req.body;

        let data = {name, price, stock}

        const newProduct = new model.data(data);

        await newProduct.save();
        
        res.redirect('/')
    }

    async deleteProduct (req, res) {
        let { name } = req.body;

        let product = await model.data.find({"name": name})

        if (!product) {
            return res.json({res: "no se ha encontrado un producto con este nombre"})
        }

        await model.data.deleteOne({"name": name})

        res.redirect('/')
    }
}