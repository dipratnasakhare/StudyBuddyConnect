
const express = require("express")
const { connect } = require("./config/Database")
const cors = require("cors");

const { UserAuthRoutes } = require("./routes/UserAuth.routes");

require('dotenv').config();

// Routes here 

const app = express()
app.use(cors())

app.use(express.json());

// user data routes here

// user authentication routes and admin also 

app.use("/user", UserAuthRoutes)

// admin dashboard routes 

app.get("/", (req, res) => {

    res.send("Welcome To Study Buddy Backend")

})

app.listen(process.env.MONGOOSE_PORT_SERVER, async ()=> {
  try{
      await connect
      console.log("Connected to db")
      console.log({msg:"Your server is running at 4000 port"})
  }catch(err){
      console.log("Connection failed to db")
      console.log(err)
  }
})