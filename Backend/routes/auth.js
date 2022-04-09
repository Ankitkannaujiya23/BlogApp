const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser= require('../middleware/fetchuser');
const { json } = require('express');

const JWT_SECRET='Ankit$kannaujiya'

// ROUTE 1:  Create a user using Post  "/api/auth/createuser" No login requires 
router.post('/createuser', [
  body('name', 'Enter the Valid Name').isLength({ min: 4 }),
  body('email', 'Enter the Valid Email').isEmail(),
  body('phone').isLength({ max: 10 }),
  body('password').isLength({ min: 8 }),

], async (req, res) => {
  let success=false;
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // check wether user with this email already Exist 
  try {


    let user = await User.findOne({ email: req.body.email });

    if (user) {
      success=false;
      return res.status(400).json({success, error: "Sorry a User with this email  already Exist" })

    }
//  When our function is asyn then it return promise we must use await to resolve this
    const salt= await bcrypt.genSalt(10);
    const securePass= await bcrypt.hash(req.body.password, salt)
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: securePass,
    });
    const data={
        user:{
          id: user.id 
        }
    }
    const authtoken=jwt.sign(data, JWT_SECRET);
   success=true;
    res.json({success, authtoken})

  } catch (error) {
    console.error(error.message)
    res.status(500).send("Some Error Occured")
  }

})

// ROUTE 2: authenticate a user using Post  "/api/auth/login" No login required
router.post('/login', [
  body('email', 'Enter the Valid Email').isEmail(),
  body('password','Password can not be Blank').exists(),

], async (req, res) => {
  let success=false;
   // Finds the validation errors in this request and wraps them in an object with handy functions
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
 
   const {email,password}=req.body;

   try {
     let user= await User.findOne({email})
     if(!user){

       return res.status(400).json({success, error: "Plz correct information bharo"});
     }

     const passwordCompare= await bcrypt.compare(password, user.password);

     if(!passwordCompare){
      
      return res.status(400).json({success, error: "Plz sahi info bharo"});
     }

      const data={
        user:{
          id: user.id 
        }
    }
    const authtoken=jwt.sign(data, JWT_SECRET);
   success=true;
    res.json({success,authtoken})
  
     
   } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server error")
  
   }

})

// ROUTE 2: authenticate a user using Post  "/api/auth/getuser"  login required
router.post('/getuser' ,fetchuser , async (req, res) => {

  try {
    userId=req.user.id;
    const user = await  User.findById(userId).select("-password")
    res.send (user);
  } catch (error) {

    console.error(error.message)
    res.status(500).send("Internal Server error")
 
  }

})


module.exports = router