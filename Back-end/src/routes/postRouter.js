const { Router } = require('express');
const router = Router();

const {store, nomePosts, listPosts} =  require('../controllers/postController')

router.post('/post/create', store);
router.get('/posts', listPosts);
router.get('/nomePosts/:nome', nomePosts);



module.exports = router;