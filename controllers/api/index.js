const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeworkRoutes = require('./homeworkRoutes');
// All these routes start with a /api

router.use('/users', userRoutes);
router.use('/homework', homeworkRoutes);

module.exports = router;