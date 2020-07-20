const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GifMakerSchema = new Schema({
  title: { type: String, required: true }
});

module.exports = mongoose.model('GifMaker', GifMakerSchema);
