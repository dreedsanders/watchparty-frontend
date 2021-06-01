const initialState = {
  chats: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETCHAT":
      return {
        ...state,
        chats: [action.chats],
      };
      case "ADDCHAT":
          return {
              ...state,
              chats: [...state.chats, action.chats]
          }
    default:
      return state;
  }
};
export default chatReducer
