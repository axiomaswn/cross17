var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var datadateSchema = new Schema({
  tanggal    : String,
  frequency : String,
},{
  timestamps: true
});

module.exports = mongoose.model('datadate', datadateSchema);
