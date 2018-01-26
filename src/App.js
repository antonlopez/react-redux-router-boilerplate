import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import{incrementLikes, addComment, removeComment} from './actions'


class App extends Component {
  render() {
    return (
          <div>
                <h1>
                  <Link to="/">Reduxstagram</Link>
                </h1>
          </div>

    );
  }
}


const mapStateToProps = state => {
  const {comments, posts} = state.reduxstagram
  return{comments, posts}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({	incrementLikes, addComment, removeComment }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
