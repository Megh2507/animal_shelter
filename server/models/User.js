const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    pet_type: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      
    },

    breed:{
        type: String,
        require: true,
        min: 3,
        max: 20,  
    },
    username:{
        type: String,
        require: true,
        min: 3,
        max: 20,  
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    phone_no: {
      type: Number,
      required: true,
      
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);