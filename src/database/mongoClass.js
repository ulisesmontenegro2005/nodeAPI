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

    async addProduct (name, price, stock) {
        let data = {name, price, stock}

        const newProduct = new model.data(data);

        await newProduct.save();
    }
}