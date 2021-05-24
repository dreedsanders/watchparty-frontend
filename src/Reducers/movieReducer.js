

const initialState = {
    movies: [],
    reviews: [],
    responses: [],
    moviewatches: [],
    backendmovies: [],
    movieimgs: [],
    filtered: [],
    filtering: false
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_MOVIES":
        return {
          ...state,
          movies: [...state.movies, action.movies],
        };
      case "GET_MOVIE_IMGS":
        return {
          ...state,
          movieimgs: [...state.movieimgs, action.movieimgs],
        };
      case "GET_REVIEWS":
        return {
          ...state,
          reviews: [ action.reviews],
        };
      case "GET_RESPONSES":
        return {
          ...state,
          responses: [ action.responses],
        };
      case "GET_MOVIEWATCHES":
        return {
          ...state,
          moviewatches: [ action.moviewatches],
        };
      case "GETBACKENDMOVIES":
        return {
          ...state,
          backendmovies: [action.backendmovies]
        }
      case "FILTER":
        return {
          ...state,
          filtered: action.filtered,
          filtering: true,
        };
      case "LOGOUT":
        return { initialState };
      case "RESET":
        return {
          ...state,
          filtering: false,
        };
      default:
        return state;
    }
}
export default movieReducer