const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles');

const {
    admin,
    createView,
    createItem,
    editView,
    editItem,
    deleteItem
} = require('../controllers/admin.controller');

router.get('/', admin);
router.get('/create', createView);
router.post('/create', upload.array('images', 2), createItem);
router.get('/edit/:id', editView);
router.put('/edit/:id', upload.array('images', 2), editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;