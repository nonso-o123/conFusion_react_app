import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'


//COMMENTS.. single comment
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const postComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString()
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`)
                error.response = response
                throw error;
            }
        }, error => {
            throw error
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your comment could not be posted\nError: ', error.message)
        })
}

//COMMENTS... all comments
export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok)
                return response
            else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`)
                error.response = response
                throw error
            }
        }, error => {
            let errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess,
})

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
})


//DISHES...
export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading(true))
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`)
                error.response = response
                throw error;
            }
        }, error => {
            let errmess = new Error(error.message)
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = errMess => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess,
})

export const addDishes = dishes => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
})


//PROMOS...
export const fetchPromos = () => dispatch => {
    dispatch(promosLoading(true))
    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok)
                return response
            else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`)
                error.response = response
                throw error
            }
        }, error => {
            let errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})

export const promosFailed = errMess => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess,
})

export const addPromos = promos => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos,
})


//LEADERS...
export const fetchLeaders = () => dispatch => {
    dispatch(leadersLoading(true))
    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok)
                return response
            else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`)
                error.response = response
                throw error
            }
        }, error => {
            let errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})

export const leadersFailed = errMess => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess,
})

export const addLeaders = leaders => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders,
})


//FEEDBACK..
export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => dispatch => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
        date: new Date().toISOString(),
        id: ''
    }
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error(`Error ${response.status}: ${response.statusText}`)
                error.response = response
                throw error;
            }
        }, error => {
            throw error
        })
        .then(response => response.json())
        .then(response => {
            dispatch(addComment(response));
            alert('Thank you for your feedback!\n' + JSON.stringify(response));
        })
        .catch(error => {
            console.log('Post feedback ', error.message)
            alert('Your feedback could not be posted\nError: ', error.message)
        })
}