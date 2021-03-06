const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {type: String, required: true, minlength: 3, maxlength: 200},
  images: {type: Array, minlength: 6, maxlength: 300, default: ['http://localhost:3000/img/image1.webp', 'http://localhost:3000/img/image2.webp']},
  ownerId: {type: Schema.Types.ObjectId, required: true},
  location: {type: String, required: true},
  description: {type: String, required: true, minlength: 10, maxlength: 5000},
  category: {type: String, required: true, enum: ['Elektronika', 'Dom', 'Rozrywka', 'Moda', 'Inne']},
  reserved: {type: Boolean, required: true, default: false},
  reserveeId: {type: Schema.Types.ObjectId}
});


module.exports = mongoose.model('Product', productSchema);
