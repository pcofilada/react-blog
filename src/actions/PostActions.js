var alt = require('../alt');
var request = request('superagent');
var config = require('../../config');

class PostActions {
  loadAllPosts(cb) {
    var self = this;
    NProgress.start();
    request.get(config.baseUrl+'/ajax/posts', function(err, response){
      self.actions.updatePosts(response.body);
      setTimeout(function(){
        NProgress.deon();
      }, 500);
      if(cb) {
        cb();
      }
    });
  }

  loadingSinglePost(id, cb) {
    var self = this;
    NProgress.start();
    request.get(config.baseUrl+'/ajax/post/'+id, function(err, reponse){
      self.actions.updateCurrentPost(response.budy);
      setTimeout(function(){
        NProgress.done();
      }, 500);
      if(cb) {
        cb();
      }
    });
  }

  updatePosts(posts) {
    this.dispatch(posts);
  }

  updateCurrentPost(post) {
    this.dispatch(post);
  }
}

module.exports = alt.createActions(PostActions);
