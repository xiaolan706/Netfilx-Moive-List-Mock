import * as Actions from './actions';

const initialState = {
    myList: [],
    recommendations: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.MOVIE_DATA: {
            return {
                ...action.payload,
                loading: false
            }
        }

        case Actions.ADD_MOVIE: {
            const movieData = action.payload;
            const {id} = movieData;
            const addMovie = state.myList.find(movie => movie.id === id);
            const newList = state.recommendations.filter(movie => movie.id !== id)
            if (addMovie) {
                return state
            } else {
                return {
                    ...state,
                    myList: [...state.myList, movieData],
                    recommendations: newList
                }
            }
        }
    
        case Actions.REMOVE_MOVIE: {
            const id = action.payload;
            const hasMovie = state.myList.find(movie => movie.id === id);
            const newList = state.myList.filter(movie => movie.id !== id);
            if (hasMovie) {
                return {
                    ...state,
                    myList: newList,
                    recommendations: [...state.recommendations, hasMovie]
                }
            } else {
                return state;
            }
        }

        default:
            return state
    }
}

export default reducer;