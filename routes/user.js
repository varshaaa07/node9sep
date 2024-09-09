const express = require('express');
const router = express.Router();
const Userconttroller = require('../controllers/UserController');

router.get('/users',(req,res)=>{
   Userconttroller.getUser(req,res)
})
//localhost:3000/user/10
router.get('/user/:id',(req,res)=>{
    Userconttroller.getParticularUser(req,res)
})
module.exports = router;