var express = require('express'),
    router = express.Router(),
    PostController = require('../controller/post.controller');

router.route('/').get(PostController.showAllPosts);
router.route('/ajax/posts').get(PostController.loadPostViaAjax);
router.route('/post/:id/:slug').get(PostController.showSinglePost);
router.route('/ajax/post/:id').get(PostController.loadSinglePostViaAjax);

module.exports = router;
