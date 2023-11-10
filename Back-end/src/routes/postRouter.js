const { Router } = require('express');
const router = Router();

const {store} =  require('../controllers/postController')

router.post('/post/create', store);

module.exports = router;