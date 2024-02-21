const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu');
const authorize = require('../middleware/auth');

router.get('/:id', MenuController.getItens);
router.post('/', authorize, MenuController.addItem);
router.delete('/:id', authorize, MenuController.deleteItem)
router.patch('/:id', authorize, MenuController.updateItem)

module.exports = router;