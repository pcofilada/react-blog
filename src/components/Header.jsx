var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  showAllPosts: function(e) {
    e.preventDefault();
    PostActions.loadAllPosts(function(){
      this.context.router.transitionTo('postListView');
    }).bind(this);
  },

  render: function() {
    return (
      <div classNam="header">
        <h1>
          <a href="#" onClick={this.showAllPosts}>Isomorphic React Blog</a>
        </h1>
      </div>
    )
  }
});
