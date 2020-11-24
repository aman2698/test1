const User = require("../model/user");

exports.register = async (req, res, next) => {
  const { name, email, picture, userId } = req.body;
  console.log(req);

  res.status(200).json({success: true})
};
