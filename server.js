const express = require("express");
const app = express();
const connectDB=require("./config/connectDB")
//4- middleware
app.use(express.json());

//connect to DB
connectDB()
//routes
app.use("/api/contacts",require("./routes/contact"))

//1- create port
const port = 5001;
app.listen(port, (err) =>
  err ? console.log("erreur") : console.log(`server is running on port ${port}`)
);