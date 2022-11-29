const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")
const port=1100

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://shaiknabi1123:nabihakima1123@cluster23.vsutlb1.mongodb.net/1st_DB?retryWrites=true&w=majority")
	.then(()=>{
		console.log("Connection Established")
	})
	.catch((err)=>{
		console.log(err)
	})

app.get("/",(req,res)=>{
	res.send("Sabar")
})
app.post("/register",(req,res)=>{
	//const {email,passcode}=req.body;
	const email="user1@gmail.com",passcode="5588"
	const newFrontendUser=new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})

app.listen(port,()=>console.log("Server running on port",port))
