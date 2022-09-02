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
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Homework }],
    });

    const user = userData.get({ plain: true });
    console.log (user)
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log (err)
    res.status(500).json(err);
  }
});


module.exports = router;