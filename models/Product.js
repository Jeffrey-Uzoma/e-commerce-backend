import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String},
  brand: {type: String},
  category: {type: String},
  description: {type: String},
  price: {type: Number, required: true},
  countInStock: {type:  Number, required: true},
}, {timeStamps: true})

const Product = mongoose.model('Product', productSchema)

export default Product