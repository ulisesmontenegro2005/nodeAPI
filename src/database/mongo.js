import mongoose from 'mongoose';

const dataCollection = 'data';

const dataSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
})

export const data = mongoose.model(dataCollection, dataSchema);