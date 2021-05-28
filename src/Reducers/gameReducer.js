const initialState = {
  home: false,
  playing: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_MENU":
      return {
        ...state,
        home: true,
      };
    case "PLAY_GAME":
      return {
        ...state,
        home: false,
        playing: true,
      };
    default:
      return state;
  }
};
export default gameReducer
