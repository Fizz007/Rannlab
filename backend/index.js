const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());

const publisherRoute = require("./routes/publisherRoutes");
const authorRoutes = require("./routes/autherRoutes")
const bookRoutes = require("./routes/bookRoutes")
app.use(express.json())
app.use('/publisher',publisherRoute)
app.use('/author',authorRoutes)
app.use('/upload',bookRoutes)

require('./connectDB')
const PORT = 4000
app.listen(PORT , ()=> console.log(`server is running on ${PORT}`))
