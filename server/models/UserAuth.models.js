
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    email: {type:String, require:true},
    user: {type:String, require:true},
    data: {type:Object, require:true},
    UserId :{type:String, require:true},
})

const ModelUserAuth= mongoose.model("UserDatabase", UserSchema)

module.exports = { ModelUserAuth }