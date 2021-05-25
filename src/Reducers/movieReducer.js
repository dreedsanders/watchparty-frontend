const initialState = {
  movies: [],
  reviews: [],
  responses: [],
  moviewatches: [],
  backendmovies: [],
  movieimgs: [],
  filtered: [],
  filtering: false,
  currentMovie: [],
  clicked: false,
  currentReview: [],
  respond: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      return {
        ...state,
        reviews: [action.reviews],
      };
    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.review],
      };
    case "ADD_RESPONSE":
      return {
        ...state,
        responses: [...state.responses, action.response],
      };
    case "GET_RESPONSES":
      return {
        ...state,
        responses: [action.responses],
      };
    case "GET_MOVIEWATCHES":
      return {
        ...state,
        moviewatches: [action.moviewatches],
      };
    case "GETBACKENDMOVIES":
      return {
        ...state,
        backendmovies: [action.backendmovies],
      };
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
    case "CLICKED":
      return {
        ...state,
        currentMovie: action.currentMovie,
        clicked: true,
      };
    case "BACK":
      return {
        ...state,
        clicked: false,
      };
    case "GOTORESPOND":
      return {
        ...state,
        currentReview: action.currentReview,
        respond: true,
      };
    case "BACKTOMOVIE":
      return {
        ...state,
        respond: false,
      };
    case "NEWMOVIE":
      return {
        ...state,
        currentMovie: action.currentMovie,
      };
    default:
      return state;
  }
};
export default movieReducer;
