import { combineReducers } from "redux";
import { AgentReducer } from "./agentData/reducer";
import { CompanyReducer } from "./companyProfileData/reducer";
export const BaseReducer = combineReducers({
  AgentReducer: AgentReducer,
  CompanyReducer: CompanyReducer,
});
