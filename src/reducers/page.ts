import { StatusTypes } from "../types/page/types";

const initialState = {
  repository: {
    name: "github_client",
    description: "React practice project in ITIS KFU",
    status: StatusTypes.Public
  }
};

export function pageReducer(state = initialState) {
  return state;
}
