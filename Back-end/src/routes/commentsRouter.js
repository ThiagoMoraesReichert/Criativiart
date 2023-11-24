const { Router } = require('express');
const router = Router();
const { commentsByPostId, storeComment  } = require('../controllers/commentsController');

router.get('/comments/:post_id', commentsByPostId);
router.post('/comment/create', storeComment);

module.exports = router;