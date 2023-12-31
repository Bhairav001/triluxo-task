const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { bookRoutes } = require("./routes/Book.routes");
const app = express()

require("dotenv").config()
app.get("/",(req,res)=>{
    res.send({msg:"Book Library Service"})
})


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/books",bookRoutes);

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log({msg:"connected to DB"})
    } catch (error) {
        console.log({error:error.message})
    }
    console.log({msg:`server is running on port ${process.env.PORT}`})
})