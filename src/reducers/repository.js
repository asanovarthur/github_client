const initialState = {
  name: "github_client",
  owner: "asanovarthur",
  status: "public",
  branchesAmount: 2,
  commitsAmount: 5
};

export function repositoryReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_STATUS":
      return {
        ...state,
        status: state.status === "public" ? "private" : "public"
      };
    default:
      return state;
  }
}
