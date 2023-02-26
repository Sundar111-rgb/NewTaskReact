const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let detailsSchema = new Schema({
     name :  {type : String, default : null},
      address :  {type : String, default : null},
},{timestamps : true});

detailsSchema.plugin(AutoIncrement, {inc_field: 'id'});
const details = mongoose.model('details', detailsSchema);
module.exports = details;
