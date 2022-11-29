const mongoose=require("mongoose")

const newUserSchema={
	username:String,
	password:String,
}
const Register=mongoose.model("Students",newUserSchema)

module.exports=Register