const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: false, unique: true },
        image: { type: String, required: false },
        type: { type: String, required: false },
        price: { type: Number, required: false },
        countInStock: { type: Number, required: false },
        rating: { type: Number, required: false },
        description: { type: String },
        discount: { type: Number },
        selled: { type: Number }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;