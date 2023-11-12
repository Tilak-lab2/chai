import mongoose from "mongoose";
// import mongoose from "mongoose";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,

      trim: true,
      lowercase: true,
      index: true,
    },
    avatar:{
        type:String,
        required:true,
        
    },
    watchedHistory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Videos"
    },
    coverImage:{
        type:String,
    },
    password:{
        type:String,
        required:[true,"Required"]
    },
    refreshToken:{
        type:String,
    }
  },
  {
    timestamps: true,
  }
);
// Before submitting the form this middleware will be used
userSchema.pre("save",async function(next){
if(!this.isModified("password")) return next //when only the password field is modified then hash it
this.password=bcrypt.hash(this.password,10)
next()
})
// Mongoose provides us the methods using this we can use bcrypt
// Creating custom methods
userSchema.methods.isPassword=async function(password){
  const hash=await bcrypt.compare(password,this.password)
  return hash
}
// JWT
// Creating custom methods
userSchema.methods.generateAccessToken=function(){
  Jwt.sign({
    _id:this._id,
    email:this.email,
  },process.env.ACCESS_TOKEN,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}
userSchema.methods.generateRefreshToken=async function(){
 Jwt.sign({_id:this.id},process.env.REFRESH_TOKEN_,{expiresIn:REFRESH_TOKEN_EXPIRY})
}    

const User=mongoose.model("User",userSchema)
export default User

