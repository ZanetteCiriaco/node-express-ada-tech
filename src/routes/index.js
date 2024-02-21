const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const menuRoutes = require('./menu');
const authRoutes = require('./auth');

router.use('/auth', authRoutes);
router.use('/', userRoutes);
router.use('/menu', menuRoutes);

module.exports = router;