import { myListApi, recommendationsApi } from "./fetchApi";

export const MOVIE_DATA = "MOVIE_DATA";
export const START_LOADING = "START_LOADING";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

export const startLoadingAction = () => {
    return {
        type: START_LOADING,
    }
}

export const movieDataAction = (myList, recommendations) => {
    return {
        type: MOVIE_DATA,
        payload: {
            myList,
            recommendations
        }
    }
}

export const addMovieAction = (movie) => {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}

export const removeMovieAction = (id) => {
    return {
        type: REMOVE_MOVIE,
        payload: id
    }
}

export const loadMovieDataAction = () => {
    return (dispatch) => {
        dispatch(startLoadingAction())
        return Promise.all ([
            myListApi(),
            recommendationsApi()
        ]).then(([myList, recommendations]) => {
            dispatch(movieDataAction(myList, recommendations))
        })
    }
}