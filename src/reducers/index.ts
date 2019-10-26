import { StatusTypes } from "D:/User/Desktop/github_client/src/repository/types";

export const initialState = {
  user: "asanovarthur",
  repositoryInfo: {
    name: "github_client",
    description: "React practice project in ITIS KFU",
    status: StatusTypes.Public
  }
};

export function rootReducer(state = initialState) {
  return state;
}
