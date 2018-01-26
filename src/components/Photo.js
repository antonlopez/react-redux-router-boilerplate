import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'



class Photo extends Component {

  render() {
    const {post, i, comments} = this.props;
    return (
          <figure className ="grid-figure">
              <div>
                <Link to ={`/view/${post.code}`}>
                  {post.caption}
                </Link>
              </div>

          </figure>

    );
  }
}

const styles = {
  photo:{
    width: 'calc(100% + 4rem)',
    marginLeft: '-2rem',
    marginTop: '-2rem',
    maxWidth: 'none'

  }
}

const mapStateToProps = state => {
  const {comments, posts} = state.reduxstagram
  return{comments, posts}
}



export default connect(mapStateToProps)(Photo);
