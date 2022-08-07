const express = require('express')
const router = express.Router();
const Contact = require('../models/ContactModel')
const Notice = require('../models/Notice') 


router.route("/contactUsCreate").post( (req,res)=>{
    const name = req.body.name;
    const email= req.body.email;
    const phone =req.body.phone;
    const subject = req.body.subject;
    const message= req.body.message;

    const newContact = new Contact({
        name,email,phone,subject,message
    })

    newContact.save();
})

router.route("/getContactUs").get((req,res)=>{
    Contact.find().then(foundData =>{res.json(foundData);})
})

router.route("/createNotice").post((req,res)=>{
    const notice=req.body.notice;

    const newNotice = new Notice({notice})

    newNotice.save();
})

router.route("/getNotices").get((req,res)=>{
    Notice.find().then(foundData=>{res.json(foundData)});
})
router.route("/deleteNoticeById").post( async(req,res)=>{
    
   await Notice.deleteOne({_id:req.body.id});
})

module.exports=router;