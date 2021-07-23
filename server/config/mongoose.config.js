const mongoose = require("mongoose");

module.exports = (db_name) => {//make sure we change name to database name
  mongoose
    .connect(`mongodb://localhost/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, //Will be needed later
    })//Returns Promise
    
    .then(() => {//dont need nada in the .then because if it works then we good
      console.log(`Successfully connected to ${db_name}`);
    })
    .catch((err) => {
      console.log(`mongoose connection to ${db_name} failed: `, err);
    });
};
