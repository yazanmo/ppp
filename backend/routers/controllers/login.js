require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Error, Mongoose } = require("mongoose");


const Users = require("./../../db/models/user")
const Roles = require("./../../db/models/role")


const checkLogin = (req,res) => {
Users.findOne({ email: req.body.email })
.then((result) => {
  if (result === null) {
    const err = new Error("The email doesn't exist");
    err.status = 404;
    res.json({
      message: err.message,
      status: err.status,
    });
  } else {
    let id = result._id;
    Roles.findOne({_id : result.role}).then((resu)=>{
    //   let r = resu.role
    //   let p = resu.permissions

    bcrypt.compare(req.body.password, result.password, (err, result) => {
      if (result === false) {
        const err = new Error("The password you’ve entered is incorrect");
        err.status = 403;
        res.json({
          message: err.message,
          status: err.status,
        });
      } else {
        // Roles.findOne({role:"User"})
        const payload = {
          userId: id,
        //   role: {role: r , permissions: p}
        };
        console.log(payload)
        const options = { expiresIn: "60m" };

        const secret = process.env.SECRET;
        const token = jwt.sign(payload, secret, options);

        res.json({
             token: token ,
              userId : id,
            message:"login sucessfully" });
      }})
    });
  }
})
.catch((err) => {
  res.json(err);
})
}


const authentication = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const secret = process.env.SECRET
    jwt.verify(token, secret, (err, result) => {
      if (err) {
        const err = new Error("The token is invalid or expired");
        err.status = 403;
        res.json({
          message:err.message,
          status:err.status
        })
      }if (result){
        req.token = result
        console.log(result)
        next()
      }
    });
  };
  
  const authorization = (p)=>{
  
    return (req,res,next)=>{
      let status = false
      for (let x = 0 ; x < req.token.role.permissions.length ; x++){
        if (req.token.role.permissions[x] === p ){
          status = true
        }
      }
      if (status === false){
        const err = new Error("forbidden");
        err.status = 403;
        res.json({
          message:err.message,
          status:err.status
        })
      }else{
        next()
    }}
  }


module.exports = {checkLogin , authentication , authorization };