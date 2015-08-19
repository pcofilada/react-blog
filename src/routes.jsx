var React = require('react/addons');
var Route = require('react-router').Route;
var PostListView = require('./components/PostListView.jsx');
var SinglePostView = require('./components/SinglePostView.jsx');
var App = require('./components/APp.jsx');


var routes = (
  <Route name="home" path="/" handler={App}>
    <Route name="postListView" path="/" handler={PostListView}/>
    <Route name="singlePostView" path="/post/:id/:slug" handler={SiglePostView}/>
  </Route>
);
