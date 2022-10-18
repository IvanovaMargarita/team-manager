const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        // required: [true, "User name is required"]

    },
    email:{
        type: String,
        // required: [true, "Email is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        // minlength: [4, "Password must be 4characters or longer"]
    }
},{timestamps: true})

UserSchema.virtual('confirmPassword') //it creates a virtual field that will compare the passwords, without storing cofrimed password in the DB
.get(()=> this._confirmPassword) 
.set(value=> this._confirmPassword = value)

///middleware for user model(built in into mongoose)
//makes sure the passwords match
UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });
//middleware that will use bcrypt 'npm install bcrypt'
UserSchema.pre('save',function(next){
    bcrypt.hash(this.password,10)
        .then(hash=>{
            this.password = hash
            next()
        })
})
// UserSchema.pre('save', async function(next){
//     try{
//         const hashedPassword = await bcrypt.hash(this.passsword,10) //reincrypting the password 10 times
//         console.log('Hashed Password', hashedPassword)
//         this.passsword = hashedPassword
//         next()
//     }catch(error){
//         console.log('Error in Save', error)
//     }
// })

const User = mongoose.model("User", UserSchema)
module.exports = User
// module.exports = mongoose.model('User', UserSchema)