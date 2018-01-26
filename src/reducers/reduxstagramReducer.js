import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT, RESET } from '../types';
import comments from '../fakeData/comments';
import posts from '../fakeData/post';

const INITIAL_STATE = { index: 0,
                        postId: {},
                        author: {},
                        comments: comments,
                        posts: posts
                      };

export default (state = INITIAL_STATE, action) => {

    switch (action.type){

      case INCREMENT_LIKES:
          return {
            ...state,
            index: action.index
          };

      case ADD_COMMENT:
          return {
            ...state,
            postId: action.postId,
            comment: action.comment,
            author: action.comment
          };

      case REMOVE_COMMENT:
          return {
            ...state,
            postId: action.postId,
            comment: action.comment,
            author: action.comment
          };

      case RESET:
             return INITIAL_STATE ;

       default:
               return state;





    }



}
