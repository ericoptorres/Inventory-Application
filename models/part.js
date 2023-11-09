const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true},
  description: { type: String, required: true},
  price: { type: Number, required: true },
  number_in_stock: { type: Number, required: true }
});



// Virtual for Part's URL
PartSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/part/${this._id}`;
});

// Export model
module.exports = mongoose.model("Part", PartSchema);
