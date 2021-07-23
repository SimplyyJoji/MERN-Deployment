const mongoose = require("mongoose");

//Schema is for the form and to validate it
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
  },
  type: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
  },
  desc: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
  },
  skillOne: {
    type: String,
    
  },
  skillTwo: {
    type: String, 
  },
  skillThree: {
    type: String,
  },
likeCount: {
  type: Number,
  default: 0
},

},
{ timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet


/*
Register schema with mongoose and privide a string to name the collection. This also returns a reference to our model that we can use for DB operations
*/

//Below we would get a checkbox 
// summer: {
//   type: Boolean,
//   default: false,
// },
// spring: {
//   type:Boolean,
//   default: false,
// },
// winter: {
//   type: Boolean,
//   default: false
// },
// winter: {
//   type: Boolean,
//   default: false
// }