import { RequestApiAgent } from "./action";
export const AgentReducer = (
  state = [
    {
      id: "1",
      agentName: "nada yousry",
      agentAge: "25",
      jobTitle: "front-end developer",
    },
    {
      id: "2",
      agentName: "mai mohamed",
      agentAge: "26",
      jobTitle: "front-end developer",
    },
    {
      id: "3",
      agentName: "omnia Ahmed",
      agentAge: "26",
      jobTitle: "front-end developer",
    },
    {
      id: "4",
      agentName: "nada yousry",
      agentAge: "25",
      jobTitle: "front-end developer",
    },
    {
      id: "5",
      agentName: "nada yousry",
      agentAge: "25",
      jobTitle: "front-end developer",
    },
    {
      id: "6",
      agentName: "mai mohamed",
      agentAge: "26",
      jobTitle: "front-end developer",
    },
    {
      id: "7",
      agentName: "omnia Ahmed",
      agentAge: "26",
      jobTitle: "front-end developer",
    },
    {
      id: "8",
      agentName: "nada yousry",
      agentAge: "25",
      jobTitle: "front-end developer",
    },
    {
      id: "9",
      agentName: "nada yousry",
      agentAge: "25",
      jobTitle: "front-end developer",
    },
    {
      id: "10",
      agentName: "nada yousry",
      agentAge: "25",
      jobTitle: "front-end developer",
    },
    {
      id: "11",
      agentName: "mai mohamed",
      agentAge: "26",
      jobTitle: "front-end developer",
    },
    {
      id: "12",
      agentName: "omnia Ahmed",
      agentAge: "26",
      jobTitle: "front-end developer",
    },
    {
      id: "13",
      agentName: "nada yousry",
      agentAge: "25",
      jobTitle: "front-end developer",
    },
  ],
  action
) => {
  switch (action.type) {
    case RequestApiAgent:
      //   return { ...state, agent: action.payload };
      return alert("Request Sucess");
    default:
      return state;
  }
};
