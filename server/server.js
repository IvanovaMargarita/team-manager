const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
app.use(cors()) 
app.use(express.json());  // this allows json objcts to be posted
app.use(express.urlencoded({ extended: true }));   /* This is new and allows
                        JSON Objects with strings and arrays*/
require('./config/mongoose.config'); 
require('./routes/player.routes')(app);   
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})