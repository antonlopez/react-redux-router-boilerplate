import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT } from '../types';

//increment
export const incrementLikes = (index) => {
  return{
    type:INCREMENT_LIKES,
    index
  }
}

// add comments
export const addComment = (postId, author, comment) => {
  return{
    type: ADD_COMMENT,
    postId,
    author,
    comment
  }
}
// remove comment
export const removeComment = (postId, i) => {
  return{
    type: REMOVE_COMMENT,
    postId,
    i
  }
}
