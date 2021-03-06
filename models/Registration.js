const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registrationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    
  },
  lastname: {
    type:String,
  },

  username: {
    type: String,
    // unique: true,
    
  },
  password:{
      type: String,
  }
});

registrationSchema.plugin(passportLocalMongoose);
// registerSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
module.exports = mongoose.model('Registration', registrationSchema);
