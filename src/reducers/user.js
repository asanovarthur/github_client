const initialState = {
  username: "asanovarthur"
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        username: action.payload
      };

    default:
      return state;
  }
}
