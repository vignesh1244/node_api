const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "plese enter the product name"] },
    quantity: { type: Number, require: true, default: 0 },
    price: { type: Number, require: true },
    image: { type: String, require: false },
  },
  {
    timestampe: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
