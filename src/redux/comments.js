// import { COMMENTS } from '../shared/comments'
import * as ActionTypes from './ActionTypes'

export const Comments = (state = {
    errMess: null,
    comments: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading: false, errMess: null, comments: action.payload }
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return { ...state, comment: state.concat(comment) };
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, comments: [] }
        default:
            return state;
    }
}