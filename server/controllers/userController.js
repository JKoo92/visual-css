const User = require('../models/userModel');

const userController = {};

// Handle user signup
userController.createUser = (req, res, next) => {
  const { username, email, password } = req.body;
  User.create({ username, email, password }, (err, result) => {
    if (err) return next('Error occurred at userController.createUser');
    res.locals.result = result;
    return next();
  });
};

// Handle user signin
userController.signIn = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email, password }, (err, user) => {
    if (err) return next('Error occurred at userController.signIn');
    res.locals.user = user;
    return next();
  });
};