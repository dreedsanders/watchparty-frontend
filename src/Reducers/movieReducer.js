

const initialState = {
    movies: [],
    movieimgs: [],
    filtered: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: [...state.movies, action.movies]
            }
        case 'GET_MOVIE_IMGS':
            return {
                ...state,
                movieimgs: [...state.movieimgs, action.movieimgs]
            }
        case 'FILTER':
            return {
                ...state,
                movies: action.movies,
                filtered: action.movies
            }
        case 'LOGOUT':
            return { initialState }
        case 'RESET':
            return {
                ...state,
                movies: action.movies
            }
        default:
            return state
    }
}
export default movieReducer