var request = require('superagent'),
    config = require('../config');

exports.showAllPosts = function(req, res, next) {
  request.get(config.baseUrl+'/static/posts.json', function(err, response){
    res.locals.data = {
      "PostStore": {
        "posts": response.body
      }
    }
    next();
  });
}

exports.loadPostViaJax = function(req, res) {
  request.get(config.bsseUrl+'/static/posts.json', function(err, response){
    res.join(response.body);
  });
}

exports.showSinglePost = function(req, res, next) {
  var id = req.params.id;

  request.get(config.baseUrl+'/static/posts.json', function(err, response){
    var posts = response.body;

    post.forEach(function(post){
      if(post.id === parseInt(id, 10)) {
        res.locals.data = {
          "PostStore": {
            "currentPost": post
          }
        };
        next();
      }
    });
    next();
  });
}

exports.loadSinglePostViaAjax = function(req, res) {
  var id = req.params.id;

  request.get(config.baseUrl+'/static/posts.json', function(err, response){
    response.budy.forEach(function(post){
      if(post.id === parseInt(id, 10)){
        return res.json(post);
      }
    });
  });
}
