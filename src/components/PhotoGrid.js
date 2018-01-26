import React, { Component } from 'react';
import Photo from './Photo';
import { connect } from 'react-redux';

class PhotoGrid extends Component {

  render() {
    return (
          <div style={styles.photoGrid}>
           {this.props.posts.map((post, i)=> <Photo {...this.props}
             key ={i} i={i} post={post} /> )}
          </div>

    );
  }
}

const styles = {
  photoGrid:{
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '0 auto'

  }
}

const mapStateToProps = state => {
  const {comments, posts} = state.reduxstagram
  return{comments, posts}
}



export default connect(mapStateToProps)(PhotoGrid);
