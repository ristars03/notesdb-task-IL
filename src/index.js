const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { db, testConnection} = require('./config/database.js'); 

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const NotesRoute = require('./routes/NotesRoute.js');

app.use("/", NotesRoute);


app.listen(process.env.APP_PORT,() => {
    testConnection()
    console.log(`Server is running in http://localhost:${process.env.APP_PORT}`)
})