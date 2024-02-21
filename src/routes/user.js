const express = require('express');
const router = express.Router();
const authorize = require('../middleware/auth');
const UserController = require('../controllers/user')

router.get('/users', UserController.getAll);
router.get('/user', authorize, UserController.getMy);

module.exports = router;