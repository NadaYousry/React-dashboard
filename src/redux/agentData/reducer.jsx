import { RequestApiAgent } from "./action";
export const AgentReducer = (state = [{}], action) => {
  switch (action.type) {
    case RequestApiAgent:
      //   return { ...state, agent: action.payload };
      return alert("Request Sucess");
    default:
      return state;
  }
};
