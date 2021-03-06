//Require mongoose.
const mongoose = require('mongoose');

//Create a schema for the data you need to save.
const assignTruckSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  conductors: {
    type: String,
  },
  date: {
    type: String,
    unique: true,
  },
  destination: {
    type: String,
  },

  truckRegNumber: {
    type: String,
  },
  truckCodeNumber: {
    type: String,
  },
  timeRequested: {
    type: String,
  },

});

//Export the mongoose model.
module.exports = mongoose.model('AssignTruck', assignTruckSchema);
