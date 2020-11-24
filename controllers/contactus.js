const Contact = require("../model/contactus");

exports.add = async (req, res, next) => {
  //   console.log(req.body.firstname);
  var contact = await Contact();

  contact.firstname = req.body.firstname;
  contact.lastname = req.body.lastname;
  contact.email = req.body.email;
  contact.message = req.body.message;
  console.log(contact);
  await contact.save();
  res.status(200).json({ success: true, data: contact });
};


exports.get = async (req, res, next) => {
    //   console.log(req.body.firstname);
    var contact = await Contact.find();
  
    
    res.status(200).json({ success: true, data: contact });
  };
