import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    image: { type: String, required: true },
    type: { type: String, required: true }, // subcategory of the jewelry type
    category: { type: String, required: true }, // type of jewelry
    tags: { type: String, required: true }, // used for filtering
    description: { type: String, required: true },
    price: { type: Number, required: true }
},
{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

export default Product;

