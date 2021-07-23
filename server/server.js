const express = require("express");
const cors = require("cors");


//Envirement
const port = 5000;
//Creates one I think if we dont create one already
const db_name = "pets";

require("./config/mongoose.config")(db_name);


const app = express();

app.use(express.json());
app.use(cors());
require("./routes/pet.routes")(app);

// app.unsubscribe(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESPond to.`)
})