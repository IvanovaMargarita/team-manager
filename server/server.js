const express = require('express')
require('dotenv').config();
const app = express()
app.use(express.json())
require('dotenv').config()
// const port = process.env.PORT || 8000
const port = 8000
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(cookieParser())

 //config
require('./config/mongoose.config')


 //routes
require('./routes/player.routes')(app)
require('./routes/user.routes')(app)



 app.listen(port,()=>{console.log(`Locked and loaded on port ${port}`)})
// const express = require('express');
// const cors = require('cors')    /* This is new */
// const app = express();
// require('dotenv').config()
// const cookieParser = require('cookie-parser')
// // app.use(cors()) 
// app.use(
//     cors({
//         origin:'http://localhost:3000',credentials:true
//     })
// )
// app.use(express.json());  // this allows json objcts to be posted
// app.use(express.urlencoded({ extended: true }));   /* This is new and allows
//                         JSON Objects with strings and arrays*/
// require('./config/mongoose.config'); 
// require('./routes/player.routes')(app);  
// require('./routes/user.routes') (app)
// app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// })