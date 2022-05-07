const { Schema, model } = require("mongoose");

const cinemaSchema = new Schema({


  title: {
    type: String,    
  },


  director: {
    type: String,
  },


  stars: {
    enum: [String],
  },


  image : {
     type: String,       
  },


  description: {
    type: String,
  },


  showtimes: {
    enum: [String]
  }

})

  const CinemaModel = model('Cinema', cinemaSchema);

  module.exports = CinemaModel;








