const router = require('express').Router();
const { Homework, User } = require('../models');
const withAuth = require('../utilities/auth');

router.get('/',async (req, res)=> {
    try {
     res.render('homepage',{
      logged_in: req.session.logged_in  
     });  
    } catch (error) {
      res.status(500).json(error);  
    }
});
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


module.exports = router;